const express = require('express');
const router = express.Router();

// 1. Chargement des contrôleurs
const profileCtrl = require('../controllers/recruiter/profile.controller');
const jobCtrl = require('../controllers/recruiter/job.controller');
const atsCtrl = require('../controllers/recruiter/ats.controller');
const upload = require('../config/multer.config');

// 2. Middleware d'authentification
const authMiddleware = require('../middleware/auth.middleware');
const verifyToken = typeof authMiddleware === 'function' 
    ? authMiddleware 
    : (authMiddleware.verifyToken || authMiddleware.authMiddleware || authMiddleware.protect);

if (!verifyToken) {
    throw new Error("❌ Impossible de charger le middleware d'authentification.");
}

// Sécurise automatiquement toutes les routes déclarées en dessous
router.use(verifyToken);

// ==========================================================================
// 🚀 ENDPOINTS RECRUTEUR STANDARD ET SÉCURISÉS
// ==========================================================================

// 📊 Statistiques du Dashboard
router.get('/stats', jobCtrl.getRecruiterStats);

// Profil
router.get('/profile/details', profileCtrl.getCompanyDetails);
router.post('/profile/update', upload.single('logo'), profileCtrl.updateCompany);
router.post('/profile/change-password', profileCtrl.changePassword);

// Gestion des offres (Jobs)
router.post('/jobs/create', jobCtrl.createJob); 
router.get('/jobs/list', jobCtrl.getRecruiterJobs); 
router.post('/jobs/toggle-status', jobCtrl.toggleJobStatus);
router.delete('/jobs/delete/:id', jobCtrl.deleteJob);

// Suivi des candidatures (ATS)
router.get('/ats/applications', atsCtrl.getApplications);
router.post('/ats/update-status', atsCtrl.updateStatus);

// Profil candidat et CV
router.get('/candidate-profile/:id', atsCtrl.getCandidateProfileById);
router.get('/candidate-cv/:id', atsCtrl.getCandidateCvById);

module.exports = router;
