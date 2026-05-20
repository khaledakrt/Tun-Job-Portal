const db = require('../../config/db');

// ==========================================================================
// 🚀 1. CRÉATION D'UNE ANNONCE D'EMPLOI (CORRIGÉE AVEC COMPÉTENCES & LANGUES)
// ==========================================================================
exports.createJob = async (req, res) => {
    // 🚀 Extraction mise à jour intégrant les propriétés envoyées par le formulaire Angular
    const { 
        title, 
        contract_type, 
        location, 
        workplace_type, 
        salary, 
        experience_level, 
        missions_desc, 
        profile_desc, 
        skills_desc,      // 🚀 Nouveau champ
        languages_desc,   // 🚀 Nouveau champ
        expires_at 
    } = req.body;
    
    const recruiter_id = req.user && req.user.id ? req.user.id : null;
    
    if (!recruiter_id) {
        return res.status(401).json({ message: "Erreur d'authentification. Veuillez vous reconnecter." });
    }

    try {
        // 🚀 Requête SQL mise à jour avec les colonnes complémentaires
        const sqlQuery = `
            INSERT INTO jobs 
            (recruiter_id, title, contract_type, location, workplace_type, salary, experience_level, missions_desc, profile_desc, skills_desc, languages_desc, status, expires_at) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const formattedDate = expires_at && expires_at.trim() !== '' ? expires_at : null;

        // 🚀 Injection ordonnée des variables dans le tableau de paramètres
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
            skills_desc || null,    // 🚀 Enregistre la chaîne textuelle ou null
            languages_desc || null, // 🚀 Enregistre la chaîne textuelle ou null
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
