const db = require('../../config/db');
const applicationService = require('../../services/application.service');
const notificationCtrl = require('../shared/notification.controller');
const { hasInterviewSchema } = require('../../utils/dbSchema');

exports.apply = async (req, res) => {
    const candidate_id = req.user?.id;
    if (!candidate_id) {
        return res.status(401).json({ message: 'Session expirée. Veuillez vous reconnecter.' });
    }

    const job_id = Number(req.body.job_id);
    const quiz_answers = req.body.quiz_answers || [];

    try {
        const result = await applicationService.applyToJob({
            jobId: job_id,
            candidateId: candidate_id,
            quizAnswers: quiz_answers,
        });
        return res.status(201).json(result);
    } catch (e) {
        const code = e.statusCode || 500;
        if (code >= 500) console.error('❌ apply:', e.message);
        return res.status(code).json({ message: e.message || 'Erreur lors de la postulation.' });
    }
};

exports.getHistory = async (req, res) => {
    const candidate_id = req.user?.id;
    if (!candidate_id) {
        return res.status(401).json({ message: 'Utilisateur non authentifié.' });
    }

    try {
        const interviewReady = await hasInterviewSchema();
        const [rows] = await db.execute(`
            SELECT 
                a.id AS application_id, a.status, a.applied_at, a.updated_at, a.job_id, 
                j.title AS job_title, j.recruiter_id,
                j.contract_type, j.location, j.workplace_type, j.salary, j.experience_level,
                j.company_desc, j.missions_desc, j.profile_desc,
                j.skills_desc, j.languages_desc, j.expires_at,
                ${interviewReady
                    ? `ai.scheduled_at AS interview_scheduled_at, ai.mode AS interview_mode,
                       ai.meeting_link AS interview_meeting_link, ai.location AS interview_location,
                       ai.message AS interview_message, ai.candidate_response AS interview_candidate_response,
                       ai.responded_at AS interview_responded_at,`
                    : `NULL AS interview_scheduled_at, NULL AS interview_mode,
                       NULL AS interview_meeting_link, NULL AS interview_location,
                       NULL AS interview_message, 'pending' AS interview_candidate_response,
                       NULL AS interview_responded_at,`}
                u.company_name, u.company_logo
            FROM applications a
            JOIN jobs j ON a.job_id = j.id
            JOIN users u ON j.recruiter_id = u.id
            ${interviewReady ? `LEFT JOIN (
                SELECT i1.*
                FROM application_interviews i1
                JOIN (
                    SELECT application_id, MAX(id) AS latest_id
                    FROM application_interviews
                    GROUP BY application_id
                ) latest ON latest.latest_id = i1.id
            ) ai ON ai.application_id = a.id` : ''}
            WHERE a.candidate_id = ? 
            ORDER BY a.applied_at DESC
        `, [candidate_id]);

        const applicationIds = rows.map((row) => row.application_id).filter(Boolean);
        let timelineByApplication = {};

        if (applicationIds.length) {
            const placeholders = applicationIds.map(() => '?').join(',');
            const [timelineRows] = await db.execute(
                `SELECT application_id, status, note, created_at
                 FROM application_status_history
                 WHERE application_id IN (${placeholders})
                 ORDER BY created_at ASC`,
                applicationIds
            ).catch(() => [[]]);

            timelineByApplication = timelineRows.reduce((acc, item) => {
                acc[item.application_id] = acc[item.application_id] || [];
                acc[item.application_id].push(item);
                return acc;
            }, {});
        }

        const history = rows.map((row) => ({
            ...row,
            timeline: timelineByApplication[row.application_id]?.length
                ? timelineByApplication[row.application_id]
                : [
                    { status: 'Nouveau', note: 'Candidature envoyée', created_at: row.applied_at },
                    ...(row.status && row.status !== 'Nouveau'
                        ? [{ status: row.status, note: 'Dernière mise à jour', created_at: row.updated_at }]
                        : []),
                ],
        }));

        return res.json({ history });
    } catch (e) {
        console.error('❌ getHistory:', e.message);
        return res.status(500).json({ error: e.message });
    }
};

exports.confirmInterview = async (req, res) => {
    const candidateId = req.user?.id;
    const applicationId = Number(req.params.applicationId);

    if (!candidateId || !applicationId) {
        return res.status(400).json({ message: 'Candidature invalide.' });
    }

    try {
        if (!(await hasInterviewSchema())) {
            return res.status(400).json({
                message: 'Module entretien non installé. Exécutez les migrations 004_interview_scheduling.sql puis 005_interview_confirmation.sql.',
            });
        }

        const [rows] = await db.execute(
            `SELECT ai.id AS interview_id, ai.scheduled_at, a.candidate_id,
                    j.title AS job_title, j.recruiter_id,
                    u.name AS candidate_name
             FROM application_interviews ai
             JOIN applications a ON ai.application_id = a.id
             JOIN jobs j ON a.job_id = j.id
             JOIN users u ON a.candidate_id = u.id
             WHERE a.id = ? AND a.candidate_id = ?
             ORDER BY ai.id DESC
             LIMIT 1`,
            [applicationId, candidateId]
        );

        if (!rows.length) {
            return res.status(404).json({ message: 'Entretien introuvable.' });
        }

        const interview = rows[0];
        await db.execute(
            `UPDATE application_interviews
             SET candidate_response = 'confirmed', responded_at = NOW()
             WHERE id = ?`,
            [interview.interview_id]
        );

        await notificationCtrl.triggerNotification(
            interview.recruiter_id,
            `✅ ${interview.candidate_name} a confirmé sa présence à l'entretien pour "${interview.job_title}"`
        );

        return res.json({
            message: 'Votre présence est confirmée.',
            candidate_response: 'confirmed',
            responded_at: new Date().toISOString(),
        });
    } catch (e) {
        console.error('❌ confirmInterview:', e.message);
        return res.status(500).json({ message: e.message });
    }
};
