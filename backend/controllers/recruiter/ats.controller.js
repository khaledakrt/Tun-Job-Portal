const db = require('../../config/db');


// ==========================================================================
// 📥 1. RÉCUPÉRATION DES CANDIDATURES DU RECRUTEUR (AVEC PROFIL PRO ENRICHI)
// ==========================================================================
exports.getApplications = async (req, res) => {
    try {
        const [rows] = await db.execute(`
            SELECT 
                a.id AS id, 
                a.status AS status, 
                a.applied_at AS applied_at, 
                j.title AS job_title, 
                u.id AS candidate_id,
                u.name AS name, 
                u.email AS email, 
                u.phone AS phone, 
                u.address AS address, 
                u.company_logo AS avatar_logo, 
                c.summary AS cv_summary,
                -- 🆕 AJOUT : Récupération des nouveaux critères de recherche du candidat
                cp.birth_date, 
                cp.linkedin, 
                cp.github, 
                cp.job_status, 
                cp.availability, 
                cp.job_type, 
                cp.location_pref
            FROM applications a
            JOIN jobs j ON a.job_id = j.id
            JOIN users u ON a.candidate_id = u.id
            LEFT JOIN cvs c ON u.id = c.candidate_id
            -- 🆕 AJOUT : Jointure de sécurité vers la table isolée des profils candidats
            LEFT JOIN candidate_profiles cp ON u.id = cp.user_id
            WHERE j.recruiter_id = ? 
            ORDER BY a.applied_at DESC`, [req.user.id]);

        return res.json({ applications: rows });
    } catch (e) { 
        console.error("❌ ERREUR SERVEUR GET APPLICATIONS :", e.message);
        return res.status(500).json({ error: e.message }); 
    }
};


// ==========================================================================
// 🔄 2. MISE À JOUR DU STATUT ATS ET ENVOI DE NOTIFICATION
// ==========================================================================
// 🚀 N'OUBLIEZ PAS D'AJOUTER CET IMPORT TOUT EN HAUT DE VOTRE FICHIER ATS.CONTROLLER.JS :
const notificationCtrl = require('../shared/notification.controller');

exports.updateStatus = async (req, res) => {
    const { id, status } = req.body;
    try {
        await db.execute('UPDATE applications SET status = ? WHERE id = ?', [status, id]);
        
        const [appRows] = await db.execute('SELECT candidate_id, job_id FROM applications WHERE id = ?', [id]);
        
        if (appRows && appRows.length > 0) {
            const candidateId = appRows[0].candidate_id;
            const jobId = appRows[0].job_id;
            
            const [jobRows] = await db.execute('SELECT title FROM jobs WHERE id = ?', [jobId]);
            const jobTitle = (jobRows && jobRows.length > 0) ? jobRows[0].title : "Poste";
            
            // 🚀 REMPLACEMENT : Utilise notre déclencheur partagé (Sauvegarde en BDD + Pousse le flux SSE en direct)
            await notificationCtrl.triggerNotification(
                candidateId, 
                `Votre candidature pour "${jobTitle}" a changé de statut : ${status}`
            );
        }
        
        return res.json({ message: "Statut ATS mis à jour avec succès !" });
    } catch (e) { 
        console.error("❌ ERREUR SERVEUR UPDATE STATUS :", e.message);
        return res.status(500).json({ error: e.message }); 
    }
};


// ==========================================================================
// 📥 3. RÉCUPÉRATION DU PROFIL D'UN CANDIDAT PRÉCIS (POUR LE RECRUTEUR)
// ==========================================================================
exports.getCandidateProfileById = async (req, res) => {
    try {
        const candidateId = req.params.id;
        const [rows] = await db.execute(
            'SELECT id, name, email, phone, address, company_logo AS avatar_logo FROM users WHERE id = ?', 
            [candidateId]
        );

        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: "Utilisateur introuvable" });
        }
        return res.json(rows[0]); // Renvoie l'objet utilisateur directement
    } catch (e) {
        console.error("❌ ERREUR GET CANDIDATE PROFILE :", e.message);
        return res.status(500).json({ error: e.message });
    }
};

// ==========================================================================
// 📥 4. RÉCUPÉRATION DU CV D'UN CANDIDAT PRÉCIS (POUR LE RECRUTEUR)
// ==========================================================================
exports.getCandidateCvById = async (req, res) => {
    try {
        const candidateId = req.params.id;
        const [rows] = await db.execute(
            'SELECT title, summary, skills, interests, experience, education FROM cvs WHERE candidate_id = ?', 
            [candidateId]
        );

        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: "CV introuvable pour ce candidat" });
        }
        return res.json(rows[0]); // Renvoie l'objet CV directement
    } catch (e) {
        console.error("❌ ERREUR GET CANDIDATE CV :", e.message);
        return res.status(500).json({ error: e.message });
    }
};
