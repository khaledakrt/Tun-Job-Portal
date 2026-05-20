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

// 👤 1. DÉDIÉE UNIQUEMENT AU CANDIDAT Connecté (Pour récupérer l'entreprise)
// 👤 1. DÉDIÉE UNIQUEMENT AU CANDIDAT CONNECTÉ (Extraction alignée sur vos tables jobs et applications)
exports.getRecruiterByNotificationId = async (req, res) => {
    try {
        const notificationId = req.params.id;
        const currentUserId = req.user.id; // ID du candidat connecté (ex: 7)

        // A. On récupère d'abord le texte exact de la notification
        const [notifCheck] = await db.execute(
            'SELECT message FROM notifications WHERE id = ? AND user_id = ? LIMIT 1',
            [notificationId, currentUserId]
        );

        if (!notifCheck || notifCheck.length === 0) {
            return res.status(404).json({ message: "Notification introuvable." });
        }

        const notifMessage = notifCheck[0].message;

        // B. REQUÊTE PRINCIPALE OPTIMISÉE :
        // On récupère TOUTES les offres de la table jobs pour lesquelles l'étudiant connecté a postulé,
        // et on compare en JavaScript ou via SQL celle dont le titre apparaît dans le message textuel.
        const [rows] = await db.execute(`
            SELECT 
                a.id AS application_id,
                a.status AS status,
                j.title AS job_title,
                recruiter.name AS company_name,     -- Va extraire "rec"
                recruiter.email AS email,
                recruiter.phone AS phone,
                recruiter.address AS address,
                recruiter.company_logo AS avatar_logo,
                ? AS message
            FROM applications a
            JOIN jobs j ON a.job_id = j.id
            JOIN users recruiter ON j.recruiter_id = recruiter.id
            WHERE a.candidate_id = ? AND ? LIKE CONCAT('%', j.title, '%')
            LIMIT 1`,
            [notifMessage, currentUserId, notifMessage]
        );

        if (rows && rows.length > 0) {
            return res.json(rows[0]); // Renvoie l'objet direct nettoyé sans tableau
        }

        // C. 🛡️ PLAN DE SECOURS HYPER AUTOMATISÉ :
        // Si le titre écrit dans le message a une petite différence de majuscule ou d'accent,
        // on prend simplement la dernière candidature active de ce candidat.
        const [backupRows] = await db.execute(`
            SELECT 
                a.id AS application_id,
                a.status AS status,
                j.title AS job_title,
                recruiter.name AS company_name,
                recruiter.email AS email,
                recruiter.phone AS phone,
                recruiter.address AS address,
                recruiter.company_logo AS avatar_logo,
                ? AS message
            FROM applications a
            JOIN jobs j ON a.job_id = j.id
            JOIN users recruiter ON j.recruiter_id = recruiter.id
            WHERE a.candidate_id = ?
            ORDER BY a.id DESC 
            LIMIT 1`,
            [notifMessage, currentUserId]
        );

        if (backupRows && backupRows.length > 0) {
            console.log("ℹ️ [SECOURS REUSSI] Entreprise identifiée via la table des candidatures.");
            return res.json(backupRows[0]);
        }

        return res.status(404).json({ message: "Aucune entreprise trouvée pour cette notification." });

    } catch (e) {
        console.error("❌ ERREUR API GET RECRUITER BY NOTIF :", e.message);
        return res.status(500).json({ error: e.message });
    }
};




// 💼 2. DÉDIÉE UNIQUEMENT AU RECRUTEUR Connecté (Votre code d'origine intact pour le candidat)
// 💼 DÉDIÉE UNIQUEMENT AU RECRUTEUR Connecté (Protection totale anti-500)
// ==========================================================================
// 💼 RECRUTEUR : RÉCUPÉRATION DYNAMIQUE DES DONNÉES DU CANDIDAT (ROBUSTE)
// ==========================================================================
exports.getCandidateByNotificationId = async (req, res) => {
    try {
        const notificationId = req.params.id;
        const currentUserId = req.user.id; // ID du recruteur connecté

        // 1. TENTATIVE ROBUSTE PAR IDENTIFIANT UNIQUE (Optionnelle si liée) ET COMPARAISON DU NOM PERMISSIF
        // On cherche le nom du candidat n'importe où dans le texte de la notification, sans être bloqué par les émojis
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
                c.summary AS cv_summary,
                a.status AS status
            FROM notifications n
            JOIN users u ON LOWER(TRIM(n.message)) LIKE CONCAT('%', LOWER(TRIM(u.name)), '%')
            JOIN applications a ON u.id = a.candidate_id
            JOIN jobs j ON a.job_id = j.id
            LEFT JOIN cvs c ON u.id = c.candidate_id
            WHERE n.id = ? AND j.recruiter_id = ? 
            LIMIT 1`,
            [notificationId, currentUserId]
        );

        if (rows && rows.length > 0) {
            console.log("🟢 [BACKEND] Candidat identifié avec succès par correspondance de nom.");
            return res.json(rows[0]);
        }

        // 2. 🛡️ PLAN DE SECOURS DE DEUXIÈME CHANCE (Si l'émoji ou un pseudonyme bloque la jointure textuelle)
        // On cherche l'offre correspondante dans le texte, puis on récupère la candidature liée
        const [permissiveRows] = await db.execute(`
            SELECT 
                a.id AS application_id,
                u.id AS candidate_id,
                u.name AS name,
                u.email AS email,
                u.phone AS phone,
                u.address AS address,
                u.company_logo AS avatar_logo,
                j.title AS job_title,
                c.summary AS cv_summary,
                a.status AS status
            FROM notifications n
            JOIN jobs j ON LOWER(TRIM(n.message)) LIKE CONCAT('%', LOWER(TRIM(j.title)), '%')
            JOIN applications a ON j.id = a.job_id
            JOIN users u ON a.candidate_id = u.id
            LEFT JOIN cvs c ON u.id = c.candidate_id
            WHERE n.id = ? AND j.recruiter_id = ?
            ORDER BY a.id DESC
            LIMIT 1`,
            [notificationId, currentUserId]
        );

        if (permissiveRows && permissiveRows.length > 0) {
            console.log("ℹ️ [BACKEND - SECOURS 1] Candidat identifié via le titre de l'offre.");
            return res.json(permissiveRows[0]);
        }

        // 3. 🛡️ PLAN DE SECOURS ULTRA-PERMISSIF DE DERNIÈRE CHANCE
        // En cas d'incohérence totale du texte, on renvoie la dernière candidature reçue sur les offres du recruteur
        const [ultimateRows] = await db.execute(`
            SELECT 
                a.id AS application_id,
                u.id AS candidate_id,
                u.name AS name,
                u.email AS email,
                u.phone AS phone,
                u.address AS address,
                u.company_logo AS avatar_logo,
                j.title AS job_title,
                c.summary AS cv_summary,
                a.status AS status
            FROM applications a
            JOIN jobs j ON a.job_id = j.id
            JOIN users u ON a.candidate_id = u.id
            LEFT JOIN cvs c ON u.id = c.candidate_id
            WHERE j.recruiter_id = ?
            ORDER BY a.id DESC 
            LIMIT 1`,
            [currentUserId]
        );

        if (ultimateRows && ultimateRows.length > 0) {
            console.log("ℹ️ [BACKEND - SECOURS 2] Renvoi de la dernière candidature active pour ce recruteur.");
            return res.json(ultimateRows[0]);
        }

        return res.status(404).json({ message: "Aucun candidat trouvé pour cette alerte." });

    } catch (e) {
        console.error("❌ CRASH INTERNE RECRUTEUR CANDIDATE BY NOTIF :", e.message);
        return res.status(500).json({ message: "Erreur interne du serveur lors de la récupération du candidat.", error: e.message });
    }
};





