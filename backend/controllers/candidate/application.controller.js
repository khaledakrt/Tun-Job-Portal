const db = require('../../config/db');

// ==========================================================================
// 🚀 1. SOUVENIR D'UNE CANDIDATURE (CANDIDAT -> ATS RECRUTEUR)
// ==========================================================================
exports.apply = async (req, res) => {
    const { job_id } = req.body;
    const candidate_id = req.user && req.user.id ? req.user.id : null;

    if (!candidate_id) {
        return res.status(401).json({ message: "Session expirée. Veuillez vous reconnecter." });
    }

    try {
        // 🔒 DOUBLE SÉCURITÉ : Vérifier si le candidat n'a pas déjà postulé à cette offre d'emploi
        const [existing] = await db.execute(
            'SELECT id FROM applications WHERE job_id = ? AND candidate_id = ?',
            [job_id, candidate_id]
        );

        if (existing && existing.length > 0) {
            return res.status(400).json({ message: "Vous avez déjà transmis votre profil pour cette opportunité !" });
        }

        // Insertion de la candidature avec la valeur par défaut automatique 'Nouveau' observée sur HeidiSQL
        await db.execute('INSERT INTO applications (job_id, candidate_id) VALUES (?, ?)', [job_id, candidate_id]);
        
        // Extraction des métadonnées de l'offre pour alimenter le centre d'alertes
        const [job] = await db.execute('SELECT recruiter_id, title FROM jobs WHERE id = ?', [job_id]);
        
        if (job && job.length > 0) {
            // Extraction du nom réel du candidat pour personnaliser le message reçu par le recruteur
            const [candidate] = await db.execute('SELECT name FROM users WHERE id = ?', [candidate_id]);
            const candidateName = candidate[0]?.name || "Un candidat";

            const alertMessage = `👤 ${candidateName} a postulé pour votre offre : "${job[0].title}"`;

            // Insertion de la notification dynamique pour le tableau de bord du recruteur
            await db.execute(
                'INSERT INTO notifications (user_id, message) VALUES (?, ?)', 
                [job[0].recruiter_id, alertMessage]
            );
        }

        return res.status(201).json({ message: "Votre candidature a été transmise avec succès au recruteur !" });

    } catch (e) { 
        console.error("❌ Erreur MySQL lors de la postulation :", e.message);
        return res.status(500).json({ error: e.message }); 
    }
};

// ==========================================================================
// 📥 2. HISTORIQUE DU PIPELINE DE CANDIDATURES (CORRIGÉ & SYNCHRONISÉ)
// ==========================================================================
exports.getHistory = async (req, res) => {
    const candidate_id = req.user && req.user.id ? req.user.id : null;

    if (!candidate_id) {
        return res.status(401).json({ message: "Utilisateur non authentifié." });
    }

    try {
        // 🚀 REQUÊTE PREMIUM : Rapatrie toutes les colonnes descriptives et les badges de l'offre
        const [rows] = await db.execute(`
            SELECT 
                a.status, 
                a.applied_at, 
                a.job_id, 
                j.title AS job_title, 
                j.recruiter_id,
                j.contract_type,
                j.location,
                j.missions_desc,
                j.profile_desc,
                j.skills_desc,
                j.languages_desc,
                j.expires_at,
                u.company_name,
                u.company_logo
            FROM applications a
            JOIN jobs j ON a.job_id = j.id
            JOIN users u ON j.recruiter_id = u.id
            WHERE a.candidate_id = ? 
            ORDER BY a.applied_at DESC
        `, [candidate_id]);

        return res.json({ history: rows });
    } catch (e) { 
        console.error("❌ Erreur MySQL getHistory :", e.message);
        return res.status(500).json({ error: e.message }); 
    }
};
