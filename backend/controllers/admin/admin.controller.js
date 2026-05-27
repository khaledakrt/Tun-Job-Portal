 
const db = require('../../config/db');

// 📊 1. Obtenir les statistiques globales pour le Dashboard Admin
exports.getDashboardStats = async (req, res) => {
    try {
        // Compter les candidats
        const [candidates] = await db.execute("SELECT COUNT(*) as total FROM users WHERE role = 'candidate'");
        // Compter les recruteurs
        const [recruiters] = await db.execute("SELECT COUNT(*) as total FROM users WHERE role = 'recruiter'");
        // Compter le total des offres d'emploi
        const [jobs] = await db.execute("SELECT COUNT(*) as total FROM jobs");

        return res.status(200).json({
            totalCandidates: candidates[0].total,
            totalRecruiters: recruiters[0].total,
            totalJobs: jobs[0].total
        });
    } catch (error) {
        console.error("❌ Erreur stats admin :", error);
        return res.status(500).json({ message: "Erreur lors de la récupération des statistiques." });
    }
};

// 👥 2. Récupérer tous les utilisateurs (Candidats et Recruteurs) - CORRIGÉ
exports.getAllUsers = async (req, res) => {
    try {
        const query = `
            SELECT id, name, email, role, is_verified, is_verified_company, created_at 
            FROM users 
            WHERE role != 'admin' 
            ORDER BY created_at DESC
        `; // 🚀 FIX CHIRURGICAL : Ajout de la colonne is_verified_company pour fixer la persistance au rafraîchissement
        const [users] = await db.execute(query);
        return res.status(200).json(users);
    } catch (error) {
        console.error("❌ Erreur liste utilisateurs :", error);
        return res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs." });
    }
};


// 🚫 3. Supprimer ou bannir définitivement un utilisateur
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await db.execute("DELETE FROM users WHERE id = ?", [id]);
        return res.status(200).json({ message: "Utilisateur supprimé avec succès de Tun-Job." });
    } catch (error) {
        console.error("❌ Erreur suppression utilisateur :", error);
        return res.status(500).json({ message: "Impossible de supprimer cet utilisateur." });
    }
};

// 💼 4. Récupérer toutes les offres d'emploi avec le nom de l'entreprise
exports.getAllJobs = async (req, res) => {
    try {
        const query = `
            SELECT
                jobs.*,
                users.id AS recruiter_id,
                users.name AS recruiter_name,
                users.email AS recruiter_email,
                users.phone AS recruiter_phone,
                users.address AS recruiter_address,
                users.company_logo AS recruiter_logo,
                users.is_verified_company,
                users.company_name
            FROM jobs 
            JOIN users ON jobs.recruiter_id = users.id 
            ORDER BY jobs.created_at DESC
        `;
        const [jobs] = await db.execute(query);
        return res.status(200).json(jobs);
    } catch (error) {
        console.error("❌ Erreur liste offres :", error);
        return res.status(500).json({ message: "Erreur lors de la récupération des offres d'emploi." });
    }
};

// 🗑️ 5. Supprimer une offre d'emploi non conforme
exports.deleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        await db.execute("DELETE FROM jobs WHERE id = ?", [id]);
        return res.status(200).json({ message: "L'offre d'emploi a été retirée de la plateforme." });
    } catch (error) {
        console.error("❌ Erreur suppression offre :", error);
        return res.status(500).json({ message: "Impossible de supprimer cette offre d'emploi." });
    }
};

// 🏢 6. Valider ou révoquer le statut certifié d'une entreprise recruteur
exports.toggleCompanyVerification = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body; // status vaudra 1 pour valider, 0 pour annuler

    try {
        await db.execute(
            "UPDATE users SET is_verified_company = ? WHERE id = ? AND role = 'recruiter'", 
            [status, id]
        );
        
        const msg = status === 1 ? "Entreprise certifiée avec succès !" : "Certification révoquée.";
        return res.status(200).json({ message: msg });
    } catch (error) {
        console.error("❌ Erreur validation entreprise :", error);
        return res.status(500).json({ message: "Impossible de modifier le statut de l'entreprise." });
    }
};
