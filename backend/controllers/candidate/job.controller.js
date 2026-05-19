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

