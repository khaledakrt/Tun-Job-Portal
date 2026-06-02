const nodemailer = require('nodemailer');
const { smtp, frontendUrl } = require('../config/env');
const { applicationReceivedTemplate } = require('../templates/email/application-received');
const { statusAcceptedTemplate } = require('../templates/email/status-accepted');
const { statusRejectedTemplate } = require('../templates/email/status-rejected');
const { statusInterviewTemplate } = require('../templates/email/status-interview');
const { emailLayout } = require('../templates/email/layout');

let transporter;

function getTransporter() {
    if (!transporter) {
        transporter = nodemailer.createTransport({
            host: smtp.host,
            port: smtp.port,
            secure: smtp.secure,
            auth: smtp.user && smtp.pass ? { user: smtp.user, pass: smtp.pass } : undefined,
        });
    }
    return transporter;
}

async function sendMail({ to, subject, html }) {
    if (!smtp.user || !smtp.pass) {
        console.warn('⚠️  SMTP non configuré — e-mail non envoyé:', subject, '→', to);
        return { skipped: true };
    }

    const from = `"${smtp.fromName}" <${smtp.fromAddress}>`;
    const info = await getTransporter().sendMail({ from, to, subject, html });
    return info;
}

async function notifyRecruiterNewApplication({ recruiterEmail, recruiterName, candidateName, jobTitle }) {
    const html = applicationReceivedTemplate({
        recruiterName: recruiterName || 'Recruteur',
        candidateName,
        jobTitle,
        dashboardUrl: `${frontendUrl}/recruiter/ats-pipeline`,
    });
    return sendMail({
        to: recruiterEmail,
        subject: `Tun-Job — Nouvelle candidature : ${jobTitle}`,
        html,
    });
}

function normalizeStatus(status) {
    return (status || '').toLowerCase().trim();
}

async function notifyCandidateStatusChange({ candidateEmail, candidateName, jobTitle, companyName, status }) {
    const s = normalizeStatus(status);
    const applicationsUrl = `${frontendUrl}/candidate/applications-list`;

    let html;
    let subject;

    if (s.includes('prop') || s.includes('accept') || s === 'proposition') {
        html = statusAcceptedTemplate({ candidateName, jobTitle, companyName, applicationsUrl });
        subject = `Tun-Job — Candidature acceptée : ${jobTitle}`;
    } else if (s.includes('rejet') || s.includes('refus')) {
        html = statusRejectedTemplate({ candidateName, jobTitle, companyName, applicationsUrl });
        subject = `Tun-Job — Mise à jour : ${jobTitle}`;
    } else if (s.includes('entre')) {
        html = statusInterviewTemplate({ candidateName, jobTitle, companyName, applicationsUrl });
        subject = `Tun-Job — Entretien planifié : ${jobTitle}`;
    } else {
        return { skipped: true, reason: 'status_not_emailable' };
    }

    return sendMail({ to: candidateEmail, subject, html });
}

async function sendPasswordResetEmail({ email, name, resetUrl }) {
    const html = `
      <div style="font-family:Arial,sans-serif;background:#f8fafc;padding:28px;">
        <div style="max-width:560px;margin:auto;background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;">
          <div style="padding:22px 26px;background:#0f172a;color:#ffffff;">
            <h2 style="margin:0;font-size:20px;">Tun-Job Portal</h2>
          </div>
          <div style="padding:26px;color:#334155;">
            <p style="font-size:14px;line-height:1.6;">Bonjour <strong>${name || 'utilisateur'}</strong>,</p>
            <p style="font-size:14px;line-height:1.6;">Vous avez demandé la réinitialisation de votre mot de passe.</p>
            <p style="font-size:14px;line-height:1.6;">Cliquez sur le bouton ci-dessous pour choisir un nouveau mot de passe. Ce lien expire dans 30 minutes.</p>
            <div style="text-align:center;margin:26px 0;">
              <a href="${resetUrl}" style="background:#0284c7;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:700;display:inline-block;">
                Réinitialiser mon mot de passe
              </a>
            </div>
            <p style="font-size:12px;color:#64748b;line-height:1.5;">Si vous n'êtes pas à l'origine de cette demande, ignorez simplement cet e-mail.</p>
          </div>
        </div>
      </div>`;

    return sendMail({
        to: email,
        subject: 'Tun-Job — Réinitialisation du mot de passe',
        html,
    });
}

async function notifyCandidateJobAlert({
    candidateEmail,
    candidateName,
    jobTitle,
    companyName,
    location,
    contractType,
    salary,
    jobUrl,
}) {
    const html = emailLayout({
        title: 'Nouvelle offre correspondant à votre alerte',
        bodyHtml: `
          <p style="font-size:14px;line-height:1.7;color:#334155;margin:0 0 14px;">
            Bonjour <strong>${candidateName || 'candidat'}</strong>,
          </p>
          <p style="font-size:14px;line-height:1.7;color:#334155;margin:0 0 16px;">
            Une nouvelle offre correspond à l'une de vos alertes emploi sur <strong>Tun-Job Portal</strong>.
          </p>
          <div style="border:1px solid #e2e8f0;border-radius:12px;padding:16px;background:#f8fafc;">
            <h2 style="margin:0 0 8px;font-size:17px;color:#0f172a;">${jobTitle}</h2>
            <p style="margin:0 0 10px;color:#0f766e;font-weight:700;">${companyName || 'Entreprise partenaire'}</p>
            <p style="margin:0;color:#475569;font-size:13px;line-height:1.6;">
              ${location || 'Lieu non spécifié'} · ${contractType || 'Contrat non spécifié'} · ${salary || 'Salaire non spécifié'}
            </p>
          </div>
        `,
        ctaUrl: jobUrl,
        ctaLabel: "Voir l'offre",
    });

    return sendMail({
        to: candidateEmail,
        subject: `Tun-Job — Nouvelle offre pour votre alerte : ${jobTitle}`,
        html,
    });
}

async function notifyCandidateInterviewScheduled({
    candidateEmail,
    candidateName,
    jobTitle,
    companyName,
    scheduledAt,
    mode,
    meetingLink,
    location,
    message,
}) {
    const interviewDate = new Date(scheduledAt).toLocaleString('fr-FR', {
        dateStyle: 'full',
        timeStyle: 'short',
    });

    const details = [
        `<strong>Date :</strong> ${interviewDate}`,
        `<strong>Mode :</strong> ${mode || 'En ligne'}`,
        location ? `<strong>Lieu :</strong> ${location}` : '',
        meetingLink ? `<strong>Lien :</strong> <a href="${meetingLink}" style="color:#0ea5e9;">${meetingLink}</a>` : '',
    ].filter(Boolean).join('<br>');

    const html = emailLayout({
        title: 'Entretien planifié',
        bodyHtml: `
          <p style="font-size:14px;line-height:1.7;color:#334155;margin:0 0 14px;">
            Bonjour <strong>${candidateName || 'candidat'}</strong>,
          </p>
          <p style="font-size:14px;line-height:1.7;color:#334155;margin:0 0 16px;">
            <strong>${companyName || 'Une entreprise partenaire'}</strong> a planifié un entretien pour votre candidature :
            <strong>${jobTitle}</strong>.
          </p>
          <div style="border:1px solid #e2e8f0;border-radius:12px;padding:16px;background:#f8fafc;color:#334155;font-size:14px;line-height:1.7;">
            ${details}
          </div>
          ${message ? `<p style="font-size:13px;line-height:1.7;color:#475569;margin:16px 0 0;"><strong>Message recruteur :</strong><br>${message}</p>` : ''}
        `,
        ctaUrl: `${frontendUrl}/candidate/applications-list`,
        ctaLabel: 'Voir ma candidature',
    });

    return sendMail({
        to: candidateEmail,
        subject: `Tun-Job — Entretien planifié : ${jobTitle}`,
        html,
    });
}

module.exports = {
    sendMail,
    notifyRecruiterNewApplication,
    notifyCandidateStatusChange,
    sendPasswordResetEmail,
    notifyCandidateJobAlert,
    notifyCandidateInterviewScheduled,
};
