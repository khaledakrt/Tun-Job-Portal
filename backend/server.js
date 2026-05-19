const app = require('./app');
const PORT = 3000;
// FORCER L'ÉCOUTE SUR L'IP DIRECTE POUR SUPPRIMER LA LATENCE
app.listen(PORT, '127.0.0.1', () => {
    console.log(`🚀 Serveur Tun-Job-Portal actif et ultra-rapide sur http://127.0.0.1:${PORT}`);
});
