const db = require('../config/db');
const emailService = require('./email.service');
const { frontendUrl } = require('../config/env');

function includesMatch(source, expected) {
    if (!expected) return true;
    return String(source || '').toLowerCase().includes(String(expected).toLowerCase());
}

function alertMatchesJob(alert, job) {
    return (
        includesMatch(`${job.title} ${job.skills_desc || ''}`, alert.title_keyword) &&
        includesMatch(job.location, alert.location_keyword) &&
        (!alert.contract_type || alert.contract_type === job.contract_type) &&
        (!alert.experience_level || alert.experience_level === job.experience_level)
    );
}

async function notifyMatchingCandidatesForJob(jobId) {
    const [jobs] = await db.execute(
        `SELECT j.id, j.title, j.contract_type, j.location, j.salary, j.experience_level, j.skills_desc,
                u.company_name
         FROM jobs j
         JOIN users u ON j.recruiter_id = u.id
         WHERE j.id = ? AND j.status = 'disponible'`,
        [jobId]
    );
    if (!jobs.length) return { matched: 0 };

    const job = jobs[0];
    const [alerts] = await db.execute(
        `SELECT ja.*, c.email, c.name
         FROM job_alerts ja
         JOIN users c ON ja.candidate_id = c.id
         WHERE ja.is_active = 1`
    );

    const matchingAlerts = alerts.filter((alert) => alertMatchesJob(alert, job));
    const notifiedCandidates = new Set();

    for (const alert of matchingAlerts) {
        if (notifiedCandidates.has(alert.candidate_id)) continue;
        notifiedCandidates.add(alert.candidate_id);

        const message = `🔔 Nouvelle offre correspondant à votre alerte : "${job.title}" chez ${job.company_name || 'une entreprise partenaire'}`;
        await db.execute('INSERT INTO notifications (user_id, message) VALUES (?, ?)', [
            alert.candidate_id,
            message,
        ]).catch(() => {});

        if (alert.email) {
            emailService.notifyCandidateJobAlert({
                candidateEmail: alert.email,
                candidateName: alert.name,
                jobTitle: job.title,
                companyName: job.company_name,
                location: job.location,
                contractType: job.contract_type,
                salary: job.salary,
                jobUrl: `${frontendUrl}/jobs/${job.id}`,
            }).catch((e) => console.error('❌ Email alerte emploi:', e.message));
        }
    }

    return { matched: notifiedCandidates.size };
}

module.exports = { notifyMatchingCandidatesForJob };
