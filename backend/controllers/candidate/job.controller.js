const db = require('../../config/db');

// 🚀 ENVOI DU CATALOGUE COMPLET AUX CANDIDATS CONNECTÉS
exports.getAllAvailableJobs = async (req, res) => {
    try {
        // Jointure SQL globale pour lier les offres aux entreprises
        const [rows] = await db.execute(`
            SELECT j.*, u.company_name, u.company_logo 
            FROM jobs j
            LEFT JOIN users u ON j.recruiter_id = u.id
            WHERE j.status = 'disponible'
            ORDER BY j.id DESC
        `);

        return res.status(200).json(rows);
    } catch (e) {
        console.error("❌ Erreur MySQL getAllAvailableJobs :", e.message);
        return res.status(500).json({ 
            message: "Erreur interne du serveur lors de la récupération des offres.", 
            error: e.message 
        });
    }
};

// ==========================================================================
// 📊 5. RÉCUPÉRATION DES STATISTIQUES DUPATH DASHBOARD RECRUTEUR
// ==========================================================================
exports.getRecruiterStats = async (req, res) => {
    const recruiter_id = req.user && req.user.id ? req.user.id : null;
    
    if (!recruiter_id) {
        return res.status(401).json({ message: "Utilisateur non authentifié." });
    }

    try {
        // 1. Compter le nombre total de candidatures pour ce recruteur
        const [appRows] = await db.execute(`
            SELECT COUNT(a.id) AS total_applications 
            FROM applications a
            JOIN jobs j ON a.job_id = j.id
            WHERE j.recruiter_id = ?
        `, [recruiter_id]);

        // 2. Compter le nombre d'entretiens (statut 'Entretien' ou selon votre mot-clé ATS)
        const [interviewRows] = await db.execute(`
            SELECT COUNT(a.id) AS total_interviews 
            FROM applications a
            JOIN jobs j ON a.job_id = j.id
            WHERE j.recruiter_id = ? AND a.status = 'Entretien'
        `, [recruiter_id]);

        const totalApplications = appRows[0].total_applications || 0;
        const totalInterviews = interviewRows[0].total_interviews || 0;

        // 3. Calculer un taux de conversion dynamique (ex: entretiens / candidatures)
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
        return res.status(500).json({ error: e.message });
    }
};
