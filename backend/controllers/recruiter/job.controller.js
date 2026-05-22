const db = require('../../config/db');

// ==========================================================================
// 🚀 1. CRÉATION D'UNE ANNONCE D'EMPLOI (CORRIGÉE AVEC COMPÉTENCES & LANGUES)
// ==========================================================================
exports.createJob = async (req, res) => {
    const { 
        title, 
        contract_type, 
        location, 
        workplace_type, 
        salary, 
        experience_level, 
        missions_desc, 
        profile_desc, 
        skills_desc,      
        languages_desc,   
        expires_at 
    } = req.body;
    
    const recruiter_id = req.user && req.user.id ? req.user.id : null;
    
    if (!recruiter_id) {
        return res.status(401).json({ message: "Erreur d'authentification. Veuillez vous reconnecter." });
    }

    try {
        const sqlQuery = `
            INSERT INTO jobs 
            (recruiter_id, title, contract_type, location, workplace_type, salary, experience_level, missions_desc, profile_desc, skills_desc, languages_desc, status, expires_at) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const formattedDate = expires_at && expires_at.trim() !== '' ? expires_at : null;

        await db.execute(sqlQuery, [
            recruiter_id, 
            title, 
            contract_type, 
            location, 
            workplace_type, 
            salary || null, 
            experience_level, 
            missions_desc, 
            profile_desc, 
            skills_desc || null,    
            languages_desc || null, 
            'disponible', 
            formattedDate
        ]);

        return res.status(201).json({ message: "Annonce d'emploi publiée avec succès !" });

    } catch (e) { 
        return res.status(400).json({ message: "Impossible d'insérer l'offre en base de données.", error: e.message }); 
    }
};


// ==========================================================================
// 📥 2. RÉCUPÉRATION DES ANNONCES DU RECRUTEUR
// ==========================================================================
exports.getRecruiterJobs = async (req, res) => {
    const recruiter_id = req.user && req.user.id ? req.user.id : null;
    
    if (!recruiter_id) {
        return res.status(401).json({ message: "Utilisateur non authentifié." });
    }

    try {
        const sqlQuery = `
            SELECT j.*, COUNT(a.id) AS application_count
            FROM jobs j
            LEFT JOIN applications a ON j.id = a.job_id
            WHERE j.recruiter_id = ?
            GROUP BY j.id
            ORDER BY j.id DESC
        `;

        const [rows] = await db.execute(sqlQuery, [recruiter_id]);
        return res.json(rows);
    } catch (e) { 
        return res.status(500).json({ error: e.message }); 
    }
};

// ==========================================================================
// 🗑️ 3. SUPPRESSION DÉFINITIVE D'UNE OFFRE
// ==========================================================================
exports.deleteJob = async (req, res) => {
    const jobId = req.params.id;

    try {
        await db.execute('DELETE FROM jobs WHERE id = ?', [jobId]);
        return res.status(200).json({ 
            success: true, 
            message: "Annonce supprimée définitivement avec succès !" 
        });
    } catch (e) {
        return res.status(500).json({ message: "Erreur serveur lors de la suppression." });
    }
};

// ==========================================================================
// 🔄 4. BASCULE DU STATUT DE L'OFFRE
// ==========================================================================
exports.toggleJobStatus = async (req, res) => {
    const { jobId } = req.body;

    try {
        const [rows] = await db.execute('SELECT status FROM jobs WHERE id = ?', [jobId]);
        
        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: "Annonce introuvable dans la base MySQL." });
        }

        const currentStatus = rows[0].status; 
        const newStatus = (currentStatus === 'disponible') ? 'fermé' : 'disponible';

        await db.execute('UPDATE jobs SET status = ? WHERE id = ?', [newStatus, jobId]);

        return res.status(200).json({ 
            message: "Statut mis à jour avec succès !", 
            newStatus: newStatus 
        });

    } catch (e) {
        return res.status(500).json({ message: "Erreur interne du serveur.", error: e.message });
    }
};

// ==========================================================================
// 📊 5. RÉCUPÉRATION DES STATISTIQUES DU DASHBOARD RECRUTEUR (CORRIGÉ)
// ==========================================================================
exports.getRecruiterStats = async (req, res) => {
    const recruiter_id = req.user && req.user.id ? req.user.id : null;
    
    if (!recruiter_id) {
        return res.status(401).json({ message: "Utilisateur non authentifié." });
    }

    try {
        // 1. Compter toutes les candidatures liées aux offres de ce recruteur
        const [appRows] = await db.execute(`
            SELECT COUNT(a.id) AS total_applications 
            FROM applications a
            JOIN jobs j ON a.job_id = j.id
            WHERE j.recruiter_id = ?
        `, [recruiter_id]);

        // 2. Compter les entretiens planifiés (Accepte les variantes de casse SQL)
        const [interviewRows] = await db.execute(`
            SELECT COUNT(a.id) AS total_interviews 
            FROM applications a
            JOIN jobs j ON a.job_id = j.id
            WHERE j.recruiter_id = ? AND LOWER(a.status) = 'entretien'
        `, [recruiter_id]);

        // Correction fondamentale : Accéder à l'index [0] du tableau de lignes retourné
        const totalApplications = appRows[0] ? appRows[0].total_applications : 0;
        const totalInterviews = interviewRows[0] ? interviewRows[0].total_interviews : 0;

        // 3. Calculer un taux de conversion réel
        let conversionRate = 0;
        if (totalApplications > 0) {
            conversionRate = Math.round((totalInterviews / totalApplications) * 100);
        }

        return res.json({
            applicationsCount: totalApplications,
            interviewsCount: totalInterviews,
            conversionRate: conversionRate
        });

    } catch (e) {
        console.error("❌ ERREUR GET RECRUITER STATS :", e.message);
        return res.status(500).json({ error: e.message });
    }
};
