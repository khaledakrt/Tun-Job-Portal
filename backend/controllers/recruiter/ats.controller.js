const db = require('../../config/db');
const applicationService = require('../../services/application.service');
const quizService = require('../../services/quiz.service');
const notificationCtrl = require('../shared/notification.controller');
const { hasInterviewSchema } = require('../../utils/dbSchema');

function normalizeTokens(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .split(/[^a-z0-9+#.]+/i)
        .map((token) => token.trim())
        .filter((token) => token.length >= 2);
}

function calculateCompatibilityScore(app) {
    const requiredSkills = [...new Set(normalizeTokens(app.job_skills_desc))];
    const candidateText = [
        app.cv_skills,
        app.cv_summary,
        app.job_status,
        app.location_pref,
        app.job_type,
    ].filter(Boolean).join(' ');
    const candidateTokens = new Set(normalizeTokens(candidateText));

    const matchingSkills = requiredSkills.filter((skill) => candidateTokens.has(skill));
    const skillScore = requiredSkills.length
        ? Math.round((matchingSkills.length / requiredSkills.length) * 60)
        : 25;

    const jobLocation = String(app.job_location || '').toLowerCase();
    const candidateLocation = `${app.address || ''} ${app.location_pref || ''}`.toLowerCase();
    const locationScore = jobLocation && candidateLocation && candidateLocation.includes(jobLocation.split(',')[0].trim())
        ? 20
        : 0;

    const jobContract = String(app.job_contract_type || '').toLowerCase();
    const candidateContract = String(app.job_type || '').toLowerCase();
    const contractScore = jobContract && candidateContract && candidateContract.includes(jobContract)
        ? 20
        : 0;

    const score = Math.max(0, Math.min(100, skillScore + locationScore + contractScore));

    return {
        compatibility_score: score,
        matching_skills: matchingSkills.slice(0, 8),
        missing_skills: requiredSkills.filter((skill) => !candidateTokens.has(skill)).slice(0, 8),
    };
}

exports.getApplications = async (req, res) => {
    try {
        const interviewReady = await hasInterviewSchema();
        const [rows] = await db.execute(`
            SELECT 
                a.id AS id, a.status AS status, a.applied_at AS applied_at, 
                j.title AS job_title, j.location AS job_location, j.contract_type AS job_contract_type,
                j.skills_desc AS job_skills_desc, j.languages_desc AS job_languages_desc,
                ${interviewReady
                    ? `ai.scheduled_at AS interview_scheduled_at, ai.mode AS interview_mode,
                       ai.meeting_link AS interview_meeting_link, ai.location AS interview_location,
                       ai.message AS interview_message, ai.candidate_response AS interview_candidate_response,
                       ai.responded_at AS interview_responded_at,`
                    : `NULL AS interview_scheduled_at, NULL AS interview_mode,
                       NULL AS interview_meeting_link, NULL AS interview_location,
                       NULL AS interview_message, 'pending' AS interview_candidate_response,
                       NULL AS interview_responded_at,`}
                u.id AS candidate_id,
                u.name AS name, u.email AS email, u.phone AS phone, 
                u.address AS address, u.company_logo AS avatar_logo, 
                c.summary AS cv_summary, c.skills AS cv_skills,
                cp.birth_date, cp.linkedin, cp.github, 
                cp.job_status, cp.availability, cp.job_type, cp.location_pref
            FROM applications a
            JOIN jobs j ON a.job_id = j.id
            JOIN users u ON a.candidate_id = u.id
            LEFT JOIN cvs c ON u.id = c.candidate_id
            LEFT JOIN candidate_profiles cp ON u.id = cp.user_id
            ${interviewReady ? `LEFT JOIN (
                SELECT i1.*
                FROM application_interviews i1
                JOIN (
                    SELECT application_id, MAX(id) AS latest_id
                    FROM application_interviews
                    GROUP BY application_id
                ) latest ON latest.latest_id = i1.id
            ) ai ON ai.application_id = a.id` : ''}
            WHERE j.recruiter_id = ? 
            ORDER BY a.applied_at DESC`, [req.user.id]);

        const applications = rows.map((row) => ({
            ...row,
            ...calculateCompatibilityScore(row),
        }));

        return res.json({ applications });
    } catch (e) {
        console.error('❌ GET APPLICATIONS:', e.message);
        return res.status(500).json({ error: e.message });
    }
};

exports.scheduleInterview = async (req, res) => {
    const {
        application_id,
        scheduled_at,
        mode,
        meeting_link,
        location,
        message,
    } = req.body;

    if (!application_id || !scheduled_at) {
        return res.status(400).json({ message: 'Candidature et date obligatoires.' });
    }

    try {
        const result = await applicationService.scheduleInterview({
            applicationId: Number(application_id),
            recruiterId: req.user.id,
            scheduledAt: scheduled_at,
            mode,
            meetingLink: meeting_link,
            location,
            message,
        });
        return res.json(result);
    } catch (e) {
        const code = e.statusCode || 500;
        return res.status(code).json({ message: e.message, error: e.message });
    }
};

exports.updateStatus = async (req, res) => {
    const { id, status } = req.body;
    try {
        const result = await applicationService.updateApplicationStatus({
            applicationId: id,
            status,
            recruiterId: req.user.id,
        });
        return res.json(result);
    } catch (e) {
        const code = e.statusCode || 500;
        return res.status(code).json({ message: e.message, error: e.message });
    }
};

exports.getCandidateProfileById = async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT id, name, email, phone, address, company_logo AS avatar_logo FROM users WHERE id = ?',
            [req.params.id]
        );
        if (!rows.length) return res.status(404).json({ message: 'Utilisateur introuvable' });
        return res.json(rows[0]);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

exports.getApplicationQuizAnswers = async (req, res) => {
    try {
        const applicationId = Number(req.params.applicationId);
        const data = await quizService.getApplicationQuizAnswers(applicationId, req.user.id);
        return res.json(data);
    } catch (e) {
        const code = e.statusCode || 500;
        return res.status(code).json({ message: e.message });
    }
};

exports.getCandidateCvById = async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT title, summary, skills, interests, experience, education FROM cvs WHERE candidate_id = ?',
            [req.params.id]
        );
        if (!rows.length) return res.status(404).json({ message: 'CV introuvable pour ce candidat' });
        return res.json(rows[0]);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};
