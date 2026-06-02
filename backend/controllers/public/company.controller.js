const db = require('../../config/db');

// 🏢 Récupérer la liste des entreprises (Recruteurs) certifiées
exports.getAllVerifiedCompanies = async (req, res) => {
    try {
        const [rows] = await db.execute(`
            SELECT 
                u.id, u.name, u.company_name, u.company_bio, u.company_logo, u.address, u.email, u.phone,
                COUNT(j.id) AS active_jobs_count,
                MAX(j.created_at) AS latest_job_at
            FROM users u
            LEFT JOIN jobs j ON j.recruiter_id = u.id AND j.status = 'disponible'
            WHERE u.role = 'recruiter' AND u.is_verified_company = 1
            GROUP BY u.id, u.name, u.company_name, u.company_bio, u.company_logo, u.address, u.email, u.phone
            ORDER BY u.company_name ASC
        `);

        const companyIds = rows.map((company) => company.id);
        let jobsByCompany = {};
        if (companyIds.length) {
            const placeholders = companyIds.map(() => '?').join(',');
            const [jobRows] = await db.execute(
                `SELECT id, recruiter_id, title, contract_type, location, salary
                 FROM jobs
                 WHERE status = 'disponible' AND recruiter_id IN (${placeholders})
                 ORDER BY created_at DESC`,
                companyIds
            );
            jobsByCompany = jobRows.reduce((acc, job) => {
                acc[job.recruiter_id] = acc[job.recruiter_id] || [];
                if (acc[job.recruiter_id].length < 3) acc[job.recruiter_id].push(job);
                return acc;
            }, {});
        }

        const companies = rows.map((company) => ({
            ...company,
            latest_jobs: jobsByCompany[company.id] || [],
        }));
        
        return res.status(200).json({ companies });
    } catch (error) {
        console.error("❌ Erreur récupération entreprises :", error.message);
        return res.status(500).json({ message: "Erreur lors de la récupération des entreprises." });
    }
};