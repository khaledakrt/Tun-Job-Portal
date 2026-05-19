 
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'KHESTfr2024**', 
    database: 'tun_job_portal',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection()
    .then(conn => {
        console.log('✅ MySQL Connecté avec succès !');
        conn.release();
    })
    .catch(err => console.error('❌ Erreur de connexion MySQL :', err.message));

module.exports = pool;
