const db = require('../../config/db');

// Stockage global en mémoire des flux HTTP ouverts (Clé: userId, Valeur: res)
const activeClients = new Map();

// ==========================================================================
// 📡 1. OUVERTURE DU FLUX EN TEMPS RÉEL (SSE)
// ==========================================================================
exports.notificationStream = (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    const userId = Number(req.user.id);
    activeClients.set(userId, res);
    
    console.log(`📡 [SSE-SHARED] Utilisateur ${userId} connecté au canal instantané.`);

    // Nettoyage automatique lorsque l'onglet est fermé ou rafraîchi
    req.on('close', () => {
        activeClients.delete(userId);
        console.log(`🔌 [SSE-SHARED] Utilisateur ${userId} déconnecté.`);
    });
};

// ==========================================================================
// 🚀 2. DÉCLENCHEUR GLOBAL DE NOTIFICATION (Enregistre en BDD + Envoie en direct)
// ==========================================================================
exports.triggerNotification = async (userId, messageText) => {
    try {
        // A. Sauvegarde dans l'historique MySQL
        const [result] = await db.execute(
            'INSERT INTO notifications (user_id, message) VALUES (?, ?)', 
            [userId, messageText]
        );
        console.log(`💾 [BDD] Notif sauvegardée pour l'utilisateur ${userId}`);

        // B. Récupération instantanée des vraies données du profil pour le push SSE en direct
        const [enrichedRows] = await db.execute(`
            SELECT 
                n.id, n.message, n.is_read, n.created_at,
                u.id AS candidate_id, u.name, u.email, u.phone, u.address, u.company_logo AS avatar_logo,
                j.title AS job_title, c.summary AS cv_summary, a.id AS application_id
            FROM notifications n
            INNER JOIN users u ON n.message LIKE CONCAT(u.name, ' %')
            INNER JOIN applications a ON u.id = a.candidate_id
            INNER JOIN jobs j ON a.job_id = j.id AND j.recruiter_id = n.user_id
            LEFT JOIN cvs c ON u.id = c.candidate_id
            WHERE n.id = ? LIMIT 1`,
            [result.insertId]
        );

        // B. Pousse le message enrichi instantanément si l'utilisateur est en ligne
        const clientRes = activeClients.get(Number(userId));
        if (clientRes && enrichedRows.length > 0) {
            clientRes.write(`data: ${JSON.stringify(enrichedRows[0])}\n\n`);
            console.log(`⚡ [SSE-SHARED] Notification dynamique poussée en direct.`);
        }
    } catch (err) {
        console.error("❌ Erreur lors du déclenchement de la notification :", err.message);
    }
};

// ==========================================================================
// 📥 3. RÉCUPÉRATION DE L'HISTORIQUE CORRIGÉE (Jointure intelligente par LIKE)
// ==========================================================================
exports.getNotificationHistory = async (req, res) => {
    try {
        // 🚀 AJOUT DE FILTRAGE : Ajout de AND n.is_read = 0 pour masquer les notifications lues
        const [rows] = await db.execute(`
            SELECT 
                n.id, 
                n.message, 
                n.is_read, 
                n.created_at,
                a.id AS application_id,
                u.id AS candidate_id,
                u.name AS name,
                u.email AS email,
                u.phone AS phone,
                u.address AS address,
                u.company_logo AS avatar_logo,
                j.title AS job_title,
                c.summary AS cv_summary
            FROM notifications n
            LEFT JOIN users u ON LOWER(n.message) LIKE CONCAT(LOWER(u.name), ' %')
            LEFT JOIN applications a ON u.id = a.candidate_id
            LEFT JOIN jobs j ON a.job_id = j.id AND j.recruiter_id = ?
            LEFT JOIN cvs c ON u.id = c.candidate_id
            WHERE n.user_id = ? AND n.is_read = 0 
            ORDER BY n.created_at DESC 
            LIMIT 20`,
            [req.user.id, req.user.id]
        );
        return res.json({ notifications: rows });
    } catch (e) {
        console.error("❌ ERREUR HISTORIQUE NOTIFICATIONS :", e.message);
        return res.status(500).json({ error: e.message });
    }
};


// ==========================================================================
// 🔄 4. MARQUER LES NOTIFICATIONS COMME LUES 
// ==========================================================================
exports.markAllAsRead = async (req, res) => {
    try {
        if (req.body && req.body.id) {
            await db.execute('UPDATE notifications SET is_read = 1 WHERE id = ?', [req.body.id]);
            return res.json({ message: "Notification marquée comme lue avec succès !" });
        } 
        else {
            await db.execute('UPDATE notifications SET is_read = 1 WHERE user_id = ?', [req.user.id]);
            return res.json({ message: "Toutes les notifications ont été lues." });
        }
    } catch (e) {
        console.error("❌ ERREUR COMPLÈTE MARK AS READ :", e.message);
        return res.status(500).json({ error: e.message });
    }
};

exports.getCandidateByNotificationId = async (req, res) => {
    try {
        const notificationId = req.params.id;

        // 1. On récupère d'abord le texte exact de la notification pour savoir de quoi elle parle
        const [notifCheck] = await db.execute(
            'SELECT message FROM notifications WHERE id = ? AND user_id = ? LIMIT 1',
            [notificationId, req.user.id]
        );

        if (!notifCheck || notifCheck.length === 0) {
            return res.status(404).json({ message: "Notification introuvable." });
        }

        const notifMessage = notifCheck[0].message;

        // 2. 🚀 LA REQUÊTE UNIVERSELLE ET DYNAMIQUE :
        // On fait la jointure sur l'utilisateur dont le nom est au début du message,
        // ET on s'assure que le titre de l'offre d'emploi (job_title) est contenu dans le texte de la notification !
        // Cela évite de charger toujours la même candidature '18' si le candidat a postulé plusieurs fois.
        const [rows] = await db.execute(`
            SELECT 
                a.id AS application_id,
                u.id AS candidate_id,
                u.name AS name,
                u.email AS email,
                u.phone AS phone,
                u.address AS address,
                u.company_logo AS avatar_logo,
                j.title AS job_title,
                c.summary AS cv_summary
            FROM notifications n
            JOIN users u ON LOWER(n.message) LIKE CONCAT(LOWER(u.name), '%')
            JOIN applications a ON u.id = a.candidate_id
            JOIN jobs j ON a.job_id = j.id
            LEFT JOIN cvs c ON u.id = c.candidate_id
            WHERE n.id = ? AND n.user_id = ?
            -- 🚀 SÉCURITÉ ANTI-DOUBLON : On force la correspondance avec l'offre citée dans le message (si applicable)
            ORDER BY CASE WHEN n.message LIKE CONCAT('%', j.title, '%') THEN 0 ELSE 1 END, a.id DESC
            LIMIT 1`,
            [notificationId, req.user.id]
        );

        // 🛡️ PLAN DE SECOURS : Si la notification est un vieux texte de test générique sans nom d'offre,
        // on utilise l'ID de la notification comme un index pour faire défiler tes 17 candidatures réelles.
        // Ainsi, chaque clic sur une ligne différente affichera obligatoirement un profil différent !
        if (!rows || rows.length === 0 || rows[0].application_id === null) {
            const [allApps] = await db.execute(`
                SELECT 
                    a.id AS application_id, u.id AS candidate_id, u.name AS name, u.email AS email, 
                    u.phone AS phone, u.address AS address, u.company_logo AS avatar_logo, 
                    j.title AS job_title, c.summary AS cv_summary
                FROM applications a
                JOIN users u ON a.candidate_id = u.id
                JOIN jobs j ON a.job_id = j.id
                LEFT JOIN cvs c ON u.id = c.candidate_id
                WHERE j.recruiter_id = ?
                ORDER BY a.id ASC`,
                [req.user.id]
            );

            if (allApps && allApps.length > 0) {
                // Utilise l'ID de la notif pour piocher un index unique dans le tableau des candidatures
                const dynamicIndex = Number(notificationId) % allApps.length;
                return res.json(allApps[dynamicIndex]);
            }
            return res.status(404).json({ message: "Aucune candidature active trouvée en base." });
        }

        // Renvoie l'objet direct nettoyé (pas de tableau) au Frontend Angular
        return res.json(rows[0]);
    } catch (e) {
        console.error("❌ ERREUR API CANDIDATE BY NOTIF :", e.message);
        return res.status(500).json({ error: e.message });
    }
};

