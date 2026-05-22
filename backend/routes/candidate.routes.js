const express = require('express');
const router = express.Router();

// 🛡️ IMPORTATION SÉCURISÉE DU MIDDLEWARE D'AUTHENTIFICATION JWT
const { verifyToken } = require('../middleware/auth.middleware'); 

// 📸 IMPORTATION DU COMPOSANT DE CHARGEMENT MULTIMÉDIA (MULTER)
const upload = require('../config/multer.config');

// Chargement des contrôleurs du sous-dossier candidate/
const profileCtrl = require('../controllers/candidate/profile.controller');
const cvCtrl = require('../controllers/candidate/cv.controller');
const appCtrl = require('../controllers/candidate/application.controller');
const candidateJobCtrl = require('../controllers/candidate/job.controller'); 

// ==========================================================================
// 👤 MODULE PROFIL CANDIDAT (PROTÉGÉ PAR TOKEN JWT)
// ==========================================================================
router.post('/profile/update', verifyToken, upload.single('photo'), profileCtrl.updateProfile);
router.post('/profile/update-avatar', verifyToken, upload.single('logo'), profileCtrl.updateAvatar);
router.get('/profile/details', verifyToken, profileCtrl.getProfileDetails);

// ==========================================================================
// 💼 MOTEUR DE RECHERCHE D'OFFRES
// ==========================================================================
// 🔓 ROUTE PUBLIQUE : 'verifyToken' a été supprimé pour permettre l'accès à tout le monde
router.get('/jobs/list', candidateJobCtrl.getAllAvailableJobs); 

// ==========================================================================
// 📄 GESTIONNAIRE DE CV & CANDIDATURES
// ==========================================================================
router.post('/cv/save', verifyToken, cvCtrl.saveCV);
router.get('/cv/details', verifyToken, cvCtrl.getCVDetails); 

// 🔒 ROUTE PRIVÉE : Reste protégée, l'utilisateur DOIT être connecté pour postuler
router.post('/apply', verifyToken, appCtrl.apply);
router.get('/history', verifyToken, appCtrl.getHistory);

router.get('/profile/details-public/:id', verifyToken, profileCtrl.getPublicCompanyDetails);

module.exports = router;
