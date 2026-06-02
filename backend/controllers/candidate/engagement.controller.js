const db = require('../../config/db');

exports.getSavedJobs = async (req, res) => {
    const candidateId = req.user?.id;
    try {
        const [rows] = await db.execute(
            `SELECT sj.job_id, sj.created_at
             FROM saved_jobs sj
             WHERE sj.candidate_id = ?
             ORDER BY sj.created_at DESC`,
            [candidateId]
        );
        return res.json({ savedJobs: rows });
    } catch (e) {
        return res.status(500).json({ message: 'Impossible de récupérer vos favoris.', error: e.message });
    }
};

exports.toggleSavedJob = async (req, res) => {
    const candidateId = req.user?.id;
    const jobId = Number(req.body.job_id);
    if (!jobId) return res.status(400).json({ message: 'Offre invalide.' });

    try {
        const [existing] = await db.execute(
            'SELECT id FROM saved_jobs WHERE candidate_id = ? AND job_id = ?',
            [candidateId, jobId]
        );

        if (existing.length) {
            await db.execute('DELETE FROM saved_jobs WHERE id = ?', [existing[0].id]);
            return res.json({ saved: false, message: 'Offre retirée de vos favoris.' });
        }

        await db.execute(
            'INSERT INTO saved_jobs (candidate_id, job_id) VALUES (?, ?)',
            [candidateId, jobId]
        );
        return res.json({ saved: true, message: 'Offre ajoutée à vos favoris.' });
    } catch (e) {
        return res.status(500).json({ message: 'Impossible de modifier vos favoris.', error: e.message });
    }
};

exports.getJobAlerts = async (req, res) => {
    const candidateId = req.user?.id;
    try {
        const [rows] = await db.execute(
            `SELECT id, title_keyword, location_keyword, contract_type, experience_level, is_active, created_at
             FROM job_alerts
             WHERE candidate_id = ?
             ORDER BY created_at DESC`,
            [candidateId]
        );
        return res.json({ alerts: rows });
    } catch (e) {
        return res.status(500).json({ message: 'Impossible de récupérer vos alertes.', error: e.message });
    }
};

exports.createJobAlert = async (req, res) => {
    const candidateId = req.user?.id;
    const { title_keyword, location_keyword, contract_type, experience_level } = req.body;

    try {
        const [result] = await db.execute(
            `INSERT INTO job_alerts (candidate_id, title_keyword, location_keyword, contract_type, experience_level)
             VALUES (?, ?, ?, ?, ?)`,
            [
                candidateId,
                title_keyword || null,
                location_keyword || null,
                contract_type || null,
                experience_level || null,
            ]
        );
        return res.status(201).json({ id: result.insertId, message: 'Alerte emploi créée avec succès.' });
    } catch (e) {
        return res.status(500).json({ message: 'Impossible de créer cette alerte.', error: e.message });
    }
};

exports.deleteJobAlert = async (req, res) => {
    const candidateId = req.user?.id;
    const alertId = Number(req.params.id);

    try {
        await db.execute('DELETE FROM job_alerts WHERE id = ? AND candidate_id = ?', [alertId, candidateId]);
        return res.json({ message: 'Alerte supprimée.' });
    } catch (e) {
        return res.status(500).json({ message: 'Impossible de supprimer cette alerte.', error: e.message });
    }
};

exports.updateJobAlert = async (req, res) => {
    const candidateId = req.user?.id;
    const alertId = Number(req.params.id);
    const { title_keyword, location_keyword, contract_type, experience_level, is_active } = req.body;

    try {
        const [result] = await db.execute(
            `UPDATE job_alerts
             SET title_keyword = ?, location_keyword = ?, contract_type = ?, experience_level = ?, is_active = ?
             WHERE id = ? AND candidate_id = ?`,
            [
                title_keyword || null,
                location_keyword || null,
                contract_type || null,
                experience_level || null,
                is_active === false ? 0 : 1,
                alertId,
                candidateId,
            ]
        );

        if (!result.affectedRows) {
            return res.status(404).json({ message: 'Alerte introuvable.' });
        }

        return res.json({ message: 'Alerte mise à jour.' });
    } catch (e) {
        return res.status(500).json({ message: 'Impossible de modifier cette alerte.', error: e.message });
    }
};
