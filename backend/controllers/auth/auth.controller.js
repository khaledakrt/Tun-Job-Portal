const db = require('../../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'TUN_JOB_SECRET_TOKEN_2026_KEY';

exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
    
    try {
        // 1. Validation locale de sécurité
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Veuillez renseigner tous les champs obligatoires." });
        }

        // 2. Interception chirurgicale du doublon MySQL avant insertion
        const [existingUser] = await db.execute('SELECT id FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            // Renvoie un code 400 propre avec le format 'message' attendu par Angular
            return res.status(400).json({ message: "Cette adresse e-mail est déjà utilisée en Tunisie." });
        }

        // 3. Chiffrement du mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 4. Insertion réelle en base de données MySQL
        await db.execute(
            'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
            [name, email, hashedPassword, role || 'candidate']
        );

        // Succès : Déclenchera la Box Verte sur le Frontend
        return res.status(201).json({ message: "Utilisateur créé avec succès !" });

    } catch (e) {
        console.error("❌ Erreur MySQL interceptée lors de l'inscription :", e);
        
        // Sécurité de secours au cas où l'index unique de MySQL bloque (Code d'erreur ER_DUP_ENTRY = 1062)
        if (e.errno === 1062 || e.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: "Cette adresse e-mail est déjà utilisée en Tunisie." });
        }

        // En cas de vrai problème de table ou de connexion de base de données
        return res.status(400).json({ message: "Impossible de créer le compte actuellement." });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Veuillez fournir un email et un mot de passe." });
        }

        const [users] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length === 0) return res.status(400).json({ message: "Identifiants ou mot de passe incorrects." });

        const isMatch = await bcrypt.compare(password, users[0].password);
        if (!isMatch) return res.status(400).json({ message: "Identifiants ou mot de passe incorrects." });

        const token = jwt.sign({ id: users[0].id, role: users[0].role }, JWT_SECRET, { expiresIn: '24h' });
        
        return res.status(200).json({ 
            token, 
            role: users[0].role, 
            name: users[0].name 
        });
    } catch (e) {
        console.error("❌ Erreur de connexion :", e);
        return res.status(400).json({ message: "Une erreur est survenue lors de la tentative de connexion." });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const [users] = await db.execute('SELECT id, name, email, role, phone, address, company_name, company_bio, company_logo FROM users WHERE id = ?', [req.user.id]);
        if (users.length === 0) return res.status(404).json({ message: "Profil introuvable." });
        
        return res.status(200).json(users[0]);
    } catch (e) {
        return res.status(400).json({ message: "Erreur de récupération du profil." });
    }
};
