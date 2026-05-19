const express = require('express');
const router = express.Router();
// 🚀 Pointage exact vers votre fichier partagé
const notificationCtrl = require('../controllers/shared/notification.controller');
const authMiddleware = require('../middleware/auth.middleware');

const verifyToken = typeof authMiddleware === 'function' ? authMiddleware : (authMiddleware.verifyToken || authMiddleware.authMiddleware);
router.use(verifyToken);

router.get('/stream', notificationCtrl.notificationStream);
router.get('/history', notificationCtrl.getNotificationHistory);
router.post('/read', notificationCtrl.markAllAsRead); 

// 🚀 AJOUT ISOLÉ : Nouvelle route pour récupérer dynamiquement le candidat complet via l'ID de sa notification
router.get('/candidate-by-notif/:id', notificationCtrl.getCandidateByNotificationId);

module.exports = router;
