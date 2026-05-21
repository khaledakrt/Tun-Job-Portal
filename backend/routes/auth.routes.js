const express = require('express');
const router = express.Router();

// Chargement unique du contrôleur (qui contient déjà la logique et le modèle User)
const ctrl = require('../controllers/auth/auth.controller'); 
const { verifyToken } = require('../middleware/auth.middleware');

// Déclaration propre des endpoints de l'API publique
router.post('/register', ctrl.register);
router.post('/login', ctrl.login);

// 🔑 NOUVEAU : Endpoint public pour intercepter le clic de confirmation par e-mail
router.get('/verify-email', ctrl.verifyEmail);

// Endpoint sécurisé par Token JWT
router.get('/profile', verifyToken, ctrl.getProfile);

module.exports = router;
