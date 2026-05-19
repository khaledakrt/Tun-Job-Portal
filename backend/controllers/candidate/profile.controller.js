const db = require('../../config/db');
const bcrypt = require('bcrypt'); // 🚀 Nécessaire pour chiffrer en toute sécurité le mot de passe candidat

// 📥 1. RÉCUPÉRATION DES INFOS CANDIDAT (Résout le problème du "Non renseigné")
exports.getCandidateProfile = async (req, res) => {
    const userId = req.user && req.user.id ? req.user.id : null;

    if (!userId) {
        return res.status(401).json({ message: "Session expirée. Veuillez vous reconnecter." });
    }

    try {
        // Extraction ciblée de la ligne candidat dans votre table 'users'
        const [rows] = await db.execute(
            'SELECT name, phone, email, address, company_logo as avatar_logo FROM users WHERE id = ?', 
            [userId]
        );

        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: "Profil candidat introuvable." });
        }

        // On renvoie la première ligne d'informations trouvée à Angular
        return res.status(200).json(rows[0]);
    } catch (e) {
        console.error("❌ Erreur MySQL getCandidateProfile :", e.message);
        return res.status(500).json({ error: e.message });
    }
};

// 📤 2. SAUVEGARDE ET MISE À JOUR DU PROFIL TEXTUEL
exports.updateProfile = async (req, res) => {
    const { name, phone, address } = req.body;
    const userId = req.user && req.user.id ? req.user.id : null;
    let avatarFilename = req.file ? req.file.filename : null;

    try {
        if (avatarFilename) {
            // Mise à jour complète (Texte + Photo)
            await db.execute(
                'UPDATE users SET name = ?, phone = ?, address = ?, company_logo = ? WHERE id = ?', 
                [name, phone, address, avatarFilename, userId]
            );
        } else {
            // Mise à jour textuelle seule
            await db.execute(
                'UPDATE users SET name = ?, phone = ?, address = ? WHERE id = ?', 
                [name, phone, address, userId]
            );
        }
        return res.json({ message: "Les informations de votre profil ont été enregistrées avec succès !" });
    } catch (e) { 
        return res.status(500).json({ error: e.message }); 
    }
};


// 📸 3. MISE À JOUR DE LA PHOTO DE PROFIL (AVATAR) VIA MULTER
exports.updateAvatar = async (req, res) => {
    // Récupère le nom du fichier généré par Multer
    let avatarFilename = req.file ? req.file.filename : null;
    const userId = req.user && req.user.id ? req.user.id : null;

    if (!userId) {
        return res.status(401).json({ message: "Session invalide. Veuillez vous reconnecter." });
    }

    if (!avatarFilename) {
        return res.status(400).json({ message: "Aucun fichier image sélectionné ou reçu par le serveur." });
    }

    try {
        // Enregistrement du nom du fichier dans la colonne company_logo
        await db.execute('UPDATE users SET company_logo = ? WHERE id = ?', [avatarFilename, userId]);
        
        return res.json({ 
            message: "Votre photo de profil a été mise à jour avec succès !", 
            filename: avatarFilename 
        });
    } catch (e) {
        console.error("❌ Erreur MySQL updateAvatar :", e.message);
        return res.status(500).json({ 
            message: "Erreur interne lors de la sauvegarde de la photo dans la base.", 
            error: e.message 
        });
    }
};



// 🔐 4. MODIFICATION SÉCURISÉE DU MOT DE PASSE CANDIDAT
exports.changeCandidatePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user && req.user.id ? req.user.id : null;

    if (!userId) {
        return res.status(401).json({ message: "Utilisateur non authentifié." });
    }

    try {
        // Récupération du mot de passe hashé actuel
        const [rows] = await db.execute('SELECT password FROM users WHERE id = ?', [userId]);
        if (!rows || rows.length === 0) {
            return res.status(404).json({ message: "Compte introuvable." });
        }

        const hashedOldPassword = rows[0].password;

        // Comparaison sécurisée avec bcrypt
        const isMatch = await bcrypt.compare(currentPassword, hashedOldPassword);
        if (!isMatch) {
            return res.status(400).json({ message: "Le mot de passe actuel saisi est incorrect." });
        }

        // Chiffrement (Hashing) du nouveau mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedNewPassword = await bcrypt.hash(newPassword, salt);

        // Sauvegarde dans la base MySQL
        await db.execute('UPDATE users SET password = ? WHERE id = ?', [hashedNewPassword, userId]);

        return res.status(200).json({ message: "Votre mot de passe a été modifié avec succès !" });

    } catch (e) {
        console.error("❌ Erreur MySQL changeCandidatePassword :", e.message);
        return res.status(500).json({ message: "Erreur interne du serveur lors de la mise à jour." });
    }
};

exports.getPublicCompanyDetails = async (req, res) => {
    const recruiterId = req.params.id;
    try {
        const [rows] = await db.execute(
            'SELECT company_name, company_bio, phone, address, email, company_logo FROM users WHERE id = ?', 
            [recruiterId]
        );
        if (rows.length === 0) return res.status(404).json({ message: "Introuvable" });
        return res.status(200).json(rows[0]);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

exports.getProfileDetails = async (req, res) => {
    const candidate_id = req.user && req.user.id ? req.user.id : null;

    if (!candidate_id) {
        return res.status(401).json({ message: "Session expirée. Veuillez vous reconnecter." });
    }

    try {
        // 🚀 CORRECTION : Remplacement de 'firstname, lastname' par 'name' conforme à votre table 'users'
        const [rows] = await db.execute(
            'SELECT id, name, email, phone, address, company_logo AS avatar_logo FROM users WHERE id = ?', 
            [candidate_id]
        );

        if (!rows || rows.length === 0) {
            return res.status(200).json({ 
                id: candidate_id,
                name: '', 
                email: req.user.email || '', 
                phone: '', 
                address: '', 
                avatar_logo: null 
            });
        }

        // On extrait la première ligne
        const userProfile = rows[0];
        return res.status(200).json(userProfile);

    } catch (e) {
        console.error("❌ Crash MySQL intercepté dans la méthode getProfileDetails :", e.message);
        return res.status(500).json({ 
            message: "Erreur interne du serveur lors de la récupération des coordonnées.", 
            error: e.message 
        });
    }
};