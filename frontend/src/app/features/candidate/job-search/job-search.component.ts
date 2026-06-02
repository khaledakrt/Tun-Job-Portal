import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApplicationService, QuizAnswerPayload } from '../../../core/services/application.service';
import { QuizService } from '../../../core/services/quiz.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css'],
})
export class JobSearchComponent implements OnInit {
  readonly environment = environment;
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  private http = inject(HttpClient);
  private applicationService = inject(ApplicationService);
  private quizService = inject(QuizService);

  allJobs: any[] = [];
  isLoading = true;
  selectedJob: any = null;
  selectedRecruiter: any = null;

  showConfirmApplyPopup = false;
  applyPopupSuccess = false;
  jobToApply: any = null;
  showAuthRequiredPopup = false;

  jobQuiz: any = null;
  quizAnswers: Record<number, number> = {};
  isLoadingQuiz = false;
  applyError = '';
  isSubmitting = false;
  savedJobIds: number[] = [];
  jobAlerts: any[] = [];
  alertSuccessMessage = '';
  editingAlertId: number | null = null;

  searchFilters = { title: '', location: '', experience: '', contract: '' };
  isLoggedIn = false;
  expandedJobText = {
    missions: false,
    profile: false,
  };

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('token');
    this.fetchAvailableJobs();
  }

  fetchAvailableJobs() {
    const token = localStorage.getItem('token');

    const jobsPromise = this.http
      .get<any>(`${environment.apiUrl}/candidate/jobs/list`)
      .toPromise();

    let historyPromise: Promise<any> = Promise.resolve({ history: [] });
    let savedJobsPromise: Promise<any> = Promise.resolve({ savedJobs: [] });
    let alertsPromise: Promise<any> = Promise.resolve({ alerts: [] });
    if (token) {
      historyPromise = this.applicationService
        .getHistory()
        .toPromise()
        .catch(() => ({ history: [] }));
      savedJobsPromise = this.applicationService
        .getSavedJobs()
        .toPromise()
        .catch(() => ({ savedJobs: [] }));
      alertsPromise = this.applicationService
        .getJobAlerts()
        .toPromise()
        .catch(() => ({ alerts: [] }));
    }

    Promise.all([jobsPromise, historyPromise, savedJobsPromise, alertsPromise])
      .then(([jobsData, historyData, savedJobsData, alertsData]) => {
        const jobsList = Array.isArray(jobsData) ? jobsData : jobsData?.jobs || [];
        const historyList = historyData?.history || [];
        const appliedJobIds = historyList.map((app: any) => app.job_id);
        this.savedJobIds = (savedJobsData?.savedJobs || []).map((item: any) => Number(item.job_id));
        this.jobAlerts = alertsData?.alerts || [];

        this.allJobs = jobsList.map((job: any) => ({
          ...job,
          has_quiz: !!job.has_quiz,
          isAlreadyApplied: token ? appliedJobIds.includes(job.id) : false,
          isSaved: token ? this.savedJobIds.includes(Number(job.id)) : false,
        }));
        this.isLoading = false;
        this.cdr.detectChanges();
      })
      .catch(() => {
        this.isLoading = false;
        this.cdr.detectChanges();
      });
  }

  loadQuizForJob(jobId: number) {
    const token = localStorage.getItem('token');
    this.isLoadingQuiz = true;
    this.jobQuiz = null;
    this.quizAnswers = {};
    this.quizService.getQuizForJob(jobId, !token).subscribe({
      next: (res) => {
        this.jobQuiz = res.has_quiz ? res.quiz : null;
        this.isLoadingQuiz = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoadingQuiz = false;
        this.jobQuiz = null;
        this.cdr.detectChanges();
      },
    });
  }

  onViewRecruiterProfile(recruiterId: number) {
    if (!recruiterId) return;
    this.http
      .get(`${environment.apiUrl}/candidate/profile/details-public/${recruiterId}`)
      .subscribe({
        next: (data) => {
          this.selectedRecruiter = data;
          this.cdr.detectChanges();
        },
        error: () => alert("Impossible de charger la fiche de cette entreprise."),
      });
  }

  getSearchJobSkillsArray(skillsText: string): string[] {
    if (!skillsText) return [];
    return skillsText.split(',').map((s) => s.trim()).filter(Boolean);
  }

  getSearchJobLanguagesArray(langText: string): string[] {
    if (!langText) return [];
    return langText.split(',').map((s) => s.trim()).filter(Boolean);
  }

  onCloseRecruiterModal() {
    this.selectedRecruiter = null;
    this.cdr.detectChanges();
  }

  get filteredJobs() {
    return this.allJobs.filter((job) => {
      const matchTitle =
        !this.searchFilters.title.trim() ||
        job.title?.toLowerCase().includes(this.searchFilters.title.toLowerCase()) ||
        job.company_name?.toLowerCase().includes(this.searchFilters.title.toLowerCase());
      const matchLocation =
        !this.searchFilters.location.trim() ||
        job.location?.toLowerCase().includes(this.searchFilters.location.toLowerCase());
      const matchExperience =
        !this.searchFilters.experience || job.experience_level === this.searchFilters.experience;
      const matchContract =
        !this.searchFilters.contract || job.contract_type === this.searchFilters.contract;
      return matchTitle && matchLocation && matchExperience && matchContract;
    });
  }

  get hasActiveFilters(): boolean {
    return !!(
      this.searchFilters.title.trim() ||
      this.searchFilters.location.trim() ||
      this.searchFilters.experience ||
      this.searchFilters.contract
    );
  }

  get totalJobsCount(): number {
    return this.allJobs.length;
  }

  get companiesCount(): number {
    return new Set(this.allJobs.map((job) => job.company_name || job.recruiter_id).filter(Boolean)).size;
  }

  get citiesCount(): number {
    return new Set(
      this.allJobs
        .map((job) => String(job.location || '').split(',')[0].trim())
        .filter(Boolean)
    ).size;
  }

  get quizJobsCount(): number {
    return this.allJobs.filter((job) => job.has_quiz).length;
  }

  onResetFilters() {
    this.searchFilters = { title: '', location: '', experience: '', contract: '' };
    this.cdr.detectChanges();
  }

  toggleSavedJob(job: any, event?: Event) {
    event?.stopPropagation();
    if (!this.isLoggedIn) {
      this.showAuthRequiredPopup = true;
      this.cdr.detectChanges();
      return;
    }

    this.applicationService.toggleSavedJob(job.id).subscribe({
      next: (res) => {
        job.isSaved = !!res.saved;
        if (job.isSaved) {
          this.savedJobIds = Array.from(new Set([...this.savedJobIds, Number(job.id)]));
        } else {
          this.savedJobIds = this.savedJobIds.filter((id) => id !== Number(job.id));
        }
        this.cdr.detectChanges();
      },
      error: () => {
        this.applyError = 'Impossible de modifier vos offres sauvegardées.';
        this.cdr.detectChanges();
      },
    });
  }

  createAlertFromFilters() {
    if (!this.isLoggedIn) {
      this.showAuthRequiredPopup = true;
      this.cdr.detectChanges();
      return;
    }

    const payload = {
      title_keyword: this.searchFilters.title.trim(),
      location_keyword: this.searchFilters.location.trim(),
      contract_type: this.searchFilters.contract,
      experience_level: this.searchFilters.experience,
    };

    this.applicationService.createJobAlert(payload).subscribe({
      next: () => {
        this.alertSuccessMessage = 'Alerte emploi créée avec ces critères.';
        this.applicationService.getJobAlerts().subscribe((data) => {
          this.jobAlerts = data?.alerts || [];
          this.cdr.detectChanges();
        });
        setTimeout(() => {
          this.alertSuccessMessage = '';
          this.cdr.detectChanges();
        }, 3000);
      },
      error: () => {
        this.alertSuccessMessage = 'Impossible de créer cette alerte pour le moment.';
        this.cdr.detectChanges();
      },
    });
  }

  editJobAlert(alert: any) {
    this.editingAlertId = alert.id;
    this.searchFilters = {
      title: alert.title_keyword || '',
      location: alert.location_keyword || '',
      experience: alert.experience_level || '',
      contract: alert.contract_type || '',
    };
    this.cdr.detectChanges();
  }

  cancelEditJobAlert() {
    this.editingAlertId = null;
    this.cdr.detectChanges();
  }

  saveEditedJobAlert() {
    if (!this.editingAlertId) return;

    const payload = {
      title_keyword: this.searchFilters.title.trim(),
      location_keyword: this.searchFilters.location.trim(),
      contract_type: this.searchFilters.contract,
      experience_level: this.searchFilters.experience,
      is_active: true,
    };

    this.applicationService.updateJobAlert(this.editingAlertId, payload).subscribe({
      next: () => {
        this.alertSuccessMessage = 'Alerte emploi modifiée.';
        this.editingAlertId = null;
        this.applicationService.getJobAlerts().subscribe((data) => {
          this.jobAlerts = data?.alerts || [];
          this.cdr.detectChanges();
        });
      },
      error: () => {
        this.alertSuccessMessage = 'Impossible de modifier cette alerte.';
        this.cdr.detectChanges();
      },
    });
  }

  deleteJobAlert(alertId: number) {
    this.applicationService.deleteJobAlert(alertId).subscribe({
      next: () => {
        this.jobAlerts = this.jobAlerts.filter((alert) => alert.id !== alertId);
        if (this.editingAlertId === alertId) this.editingAlertId = null;
        this.alertSuccessMessage = 'Alerte supprimée.';
        this.cdr.detectChanges();
      },
      error: () => {
        this.alertSuccessMessage = 'Impossible de supprimer cette alerte.';
        this.cdr.detectChanges();
      },
    });
  }

  onViewJobDetails(job: any) {
    this.selectedJob = job;
    this.applyError = '';
    this.expandedJobText = { missions: false, profile: false };
    if (job.has_quiz) {
      this.loadQuizForJob(job.id);
    } else {
      this.jobQuiz = null;
      this.quizAnswers = {};
    }
    this.cdr.detectChanges();
  }

  onCloseModal() {
    this.selectedJob = null;
    this.jobQuiz = null;
    this.quizAnswers = {};
    this.applyError = '';
    this.expandedJobText = { missions: false, profile: false };
    this.cdr.detectChanges();
  }

  toggleJobText(section: 'missions' | 'profile') {
    this.expandedJobText = {
      ...this.expandedJobText,
      [section]: !this.expandedJobText[section],
    };
    this.cdr.detectChanges();
  }

  scrollOfferSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private escapeHtml(value: any): string {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  openIsolatedOffer() {
    if (!this.selectedJob) return;
    const appliedContext = this.selectedJob.isAlreadyApplied ? '?from=applications' : '';
    window.open(`${window.location.origin}/jobs/${this.selectedJob.id}${appliedContext}`, '_blank');
    return;

    const job = this.selectedJob;
    const logoUrl = job.company_logo
      ? `${environment.assetsUrl}/logos/${this.escapeHtml(job.company_logo)}`
      : 'assets/images/default-avatar.png';
    const skills = this.getSearchJobSkillsArray(job.skills_desc)
      .map((skill) => `<span>${this.escapeHtml(skill)}</span>`)
      .join('');
    const languages = this.getSearchJobLanguagesArray(job.languages_desc)
      .map((lang) => `<span>${this.escapeHtml(lang)}</span>`)
      .join('');
    const quizHtml = job.has_quiz && this.jobQuiz?.questions?.length
      ? this.jobQuiz.questions.map((q: any, index: number) => `
          <article class="question">
            <h3>${index + 1}. ${this.escapeHtml(q.question_text)}</h3>
            <div class="choices">
              ${(q.choices || []).map((choice: any) => `
                <label>
                  <input type="radio" name="q-${this.escapeHtml(q.id)}" value="${this.escapeHtml(choice.id)}">
                  <span>${this.escapeHtml(choice.choice_text)}</span>
                </label>
              `).join('')}
            </div>
          </article>
        `).join('')
      : '<p class="muted">Aucun quiz disponible pour cette offre.</p>';
    const requiredQuestionIds = job.has_quiz && this.jobQuiz?.questions?.length
      ? this.jobQuiz.questions.map((q: any) => q.id)
      : [];
    const isUserLoggedIn = !!localStorage.getItem('token');
    const appOrigin = window.location.origin;

    (window as any).__tunJobApplyFromIsolated = (jobId: number, answers: Record<number, number> = {}) => {
      const targetJob = this.allJobs.find((item) => item.id === jobId) || this.selectedJob;
      if (!targetJob) return;
      this.selectedJob = targetJob;
      this.jobToApply = targetJob;
      this.quizAnswers = answers;
      this.applyError = '';
      window.focus();
      this.onRequestApplyConfirmation();
      this.cdr.detectChanges();
    };

    const isolatedWindow = window.open('about:blank', '_blank') as Window;
    if (!isolatedWindow) {
      alert("Impossible d'ouvrir le nouvel onglet. Vérifiez le bloqueur de pop-up.");
      return;
    }

    isolatedWindow.document.write(`
      <!doctype html>
      <html lang="fr">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${this.escapeHtml(job.title)} - Tun Job Portal</title>
        <style>
          body { margin: 0; font-family: Inter, Arial, sans-serif; background: #eef6f5; color: #0f172a; }
          .page { max-width: 1040px; margin: 32px auto; padding: 0 20px 40px; }
          .hero { display: grid; grid-template-columns: 86px 1fr; gap: 18px; align-items: center; padding: 24px; border-radius: 22px; background: #fff; border: 1px solid #dbe3ef; box-shadow: 0 22px 60px rgba(15,23,42,.10); }
          .logo { width: 86px; height: 86px; border: 1px solid #e2e8f0; border-radius: 20px; object-fit: contain; padding: 8px; box-sizing: border-box; background: #f8fafc; }
          h1 { margin: 0 0 8px; font-size: 30px; line-height: 1.15; letter-spacing: -.6px; }
          .company { color: #0f766e; font-weight: 800; }
          .badges { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
          .badges span, .tags span, .choices span { display: inline-flex; border-radius: 999px; padding: 7px 11px; background: #f8fafc; border: 1px solid #e2e8f0; font-size: 12px; font-weight: 800; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 18px; }
          .card { padding: 22px; border-radius: 18px; background: #fff; border: 1px solid #e2e8f0; box-shadow: 0 14px 35px rgba(15,23,42,.05); }
          .card.full { grid-column: 1 / -1; }
          h2 { margin: 0 0 12px; font-size: 18px; }
          p { margin: 0; color: #334155; line-height: 1.8; white-space: pre-line; font-size: 14px; }
          .tags, .choices { display: flex; flex-wrap: wrap; gap: 8px; }
          .question { padding: 14px; border: 1px solid #e9d5ff; border-radius: 14px; background: #fbf7ff; margin-top: 12px; }
          .question h3 { margin: 0 0 10px; font-size: 14px; }
          .choices label { display: inline-flex; align-items: center; gap: 7px; border-radius: 999px; padding: 7px 11px; background: #fff; border: 1px solid #e2e8f0; font-size: 12px; font-weight: 800; cursor: pointer; }
          .actions { position: sticky; bottom: 0; display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; padding: 16px; border-radius: 18px; background: rgba(255,255,255,.92); border: 1px solid #e2e8f0; backdrop-filter: blur(10px); }
          .apply { border: 0; border-radius: 999px; padding: 11px 18px; color: #fff; background: linear-gradient(135deg, #12b395, #0ea5e9); font-weight: 900; cursor: pointer; }
          .isolated-modal-overlay { position: fixed; inset: 0; display: none; align-items: center; justify-content: center; padding: 20px; background: rgba(15,23,42,.46); backdrop-filter: blur(5px); z-index: 50; }
          .isolated-modal-overlay.show { display: flex; }
          .isolated-modal { width: min(505px, 100%); border-radius: 16px; background: #fff; box-shadow: 0 24px 70px rgba(15,23,42,.22); padding: 32px; text-align: center; }
          .isolated-modal-icon { width: 80px; height: 80px; margin: 0 auto 18px; border-radius: 999px; display: flex; align-items: center; justify-content: center; background: #eff6ff; color: #2563eb; font-size: 48px; font-weight: 900; }
          .isolated-modal-icon svg { width: 48px; height: 48px; stroke: currentColor; }
          .isolated-modal-icon.warning { background: #fef3c7; color: #d97706; }
          .isolated-modal h2 { margin: 0 0 18px; font-size: 22px; font-weight: 900; color: #0f172a; }
          .isolated-modal p { margin: 0 0 12px; color: #475569; line-height: 1.6; white-space: normal; font-size: 14.5px; }
          .isolated-modal .sub-note { margin: 0 0 20px; padding: 10px 12px; border-radius: 8px; background: #f0f7ff; color: #2563eb; font-size: 13px; font-weight: 600; }
          .isolated-modal-actions { display: flex; gap: 12px; justify-content: center; }
          .modal-secondary, .modal-primary { flex: 1; border: 0; border-radius: 10px; padding: 12px; font-size: 14px; font-weight: 700; cursor: pointer; transition: transform .18s, background .18s; }
          .modal-secondary { background: #f1f5f9; color: #475569; }
          .modal-primary { background: #2563eb; color: #fff; box-shadow: 0 4px 6px -1px rgba(37,99,235,.20); }
          .modal-secondary:hover, .modal-primary:hover { transform: translateY(-1px); }
          .muted { color: #64748b; font-style: italic; }
          @media (max-width: 760px) { .hero, .grid { grid-template-columns: 1fr; } .card.full { grid-column: auto; } }
        </style>
      </head>
      <body>
        <main class="page">
          <section class="hero">
            <img class="logo" src="${logoUrl}" alt="Logo entreprise">
            <div>
              <h1>${this.escapeHtml(job.title)}</h1>
              <div class="company">${this.escapeHtml(job.company_name || 'Entreprise Partenaire')}</div>
              <div class="badges">
                <span>Salaire: ${this.escapeHtml(job.salary || 'Non spécifié')}</span>
                <span>Lieu: ${this.escapeHtml(job.location)}</span>
                <span>Contrat: ${this.escapeHtml(job.contract_type)}</span>
                <span>Mode: ${this.escapeHtml(job.workplace_type)}</span>
                <span>Expérience: ${this.escapeHtml(job.experience_level)}</span>
                <span>${job.has_quiz ? 'Quiz requis' : 'Sans quiz'}</span>
              </div>
            </div>
          </section>

          <section class="grid">
            <article class="card">
              <h2>Missions principales</h2>
              <p>${this.escapeHtml(job.missions_desc)}</p>
            </article>
            <article class="card">
              <h2>Profil requis</h2>
              <p>${this.escapeHtml(job.profile_desc)}</p>
            </article>
            <article class="card">
              <h2>Compétences</h2>
              <div class="tags">${skills || '<p class="muted">Non spécifié</p>'}</div>
            </article>
            <article class="card">
              <h2>Langues</h2>
              <div class="tags">${languages || '<p class="muted">Non spécifié</p>'}</div>
            </article>
            ${job.has_quiz ? `
              <article class="card full">
                <h2>Questionnaire de présélection</h2>
                ${quizHtml}
              </article>
            ` : ''}
          </section>
          <div class="actions">
            <button class="apply" onclick="submitApply()">Postuler à cette offre</button>
          </div>
        </main>
        <div id="isolatedModal" class="isolated-modal-overlay" onclick="closeIsolatedModal(event)">
          <div class="isolated-modal">
            <div class="isolated-modal-icon" id="isolatedModalIcon">!</div>
            <h2 id="isolatedModalTitle"></h2>
            <p id="isolatedModalMessage"></p>
            <div class="isolated-modal-actions" id="isolatedModalActions"></div>
          </div>
        </div>
        <script>
          const requiredQuestionIds = ${JSON.stringify(requiredQuestionIds)};
          const isUserLoggedIn = ${JSON.stringify(isUserLoggedIn)};
          const appOrigin = ${JSON.stringify(appOrigin)};

          function showIsolatedModal(title, message, type) {
            const overlay = document.getElementById('isolatedModal');
            const icon = document.getElementById('isolatedModalIcon');
            const titleEl = document.getElementById('isolatedModalTitle');
            const messageEl = document.getElementById('isolatedModalMessage');
            const actions = document.getElementById('isolatedModalActions');
            titleEl.textContent = title;
            messageEl.innerHTML = message;
            icon.innerHTML = type === 'auth'
              ? '<svg viewBox="0 0 16 16" fill="none" stroke-width="1.5" aria-hidden="true"><path d="M6 3H3.5A1.5 1.5 0 0 0 2 4.5v7A1.5 1.5 0 0 0 3.5 13H6"/><path d="M9 4l4 4-4 4"/><path d="M13 8H5"/></svg>'
              : '!';
            icon.className = 'isolated-modal-icon' + (type === 'auth' ? '' : ' warning');
            const oldNote = document.getElementById('isolatedModalSubNote');
            if (oldNote) oldNote.remove();

            if (type === 'auth') {
              messageEl.insertAdjacentHTML('afterend', '<p class="sub-note" id="isolatedModalSubNote">L\\'inscription est gratuite et prend moins de 2 minutes.</p>');
              actions.innerHTML = '<button class="modal-secondary" onclick="hideIsolatedModal()">Plus tard</button><button class="modal-primary" onclick="window.location.href=appOrigin + \\'/login\\'">Se connecter / S\\'inscrire</button>';
            } else {
              actions.innerHTML = '<button class="modal-primary" onclick="hideIsolatedModal()">Compris</button>';
            }

            overlay.classList.add('show');
          }

          function hideIsolatedModal() {
            document.getElementById('isolatedModal').classList.remove('show');
          }

          function closeIsolatedModal(event) {
            if (event.target.id === 'isolatedModal') {
              hideIsolatedModal();
            }
          }

          function submitApply() {
            if (!isUserLoggedIn) {
              showIsolatedModal(
                'Connexion requise',
                'Pour postuler à cette offre et transmettre votre dossier aux recruteurs sur <strong>TunJob Portal</strong>, vous devez posséder un compte candidat connecté.',
                'auth'
              );
              return;
            }

            const answers = {};
            for (const questionId of requiredQuestionIds) {
              const checked = document.querySelector('input[name="q-' + questionId + '"]:checked');
              if (!checked) {
                showIsolatedModal(
                  'Quiz incomplet',
                  'Veuillez répondre à toutes les questions du quiz avant de postuler.',
                  'warning'
                );
                return;
              }
              answers[questionId] = Number(checked.value);
            }

            if (!window.opener || typeof window.opener.__tunJobApplyFromIsolated !== 'function') {
              showIsolatedModal(
                'Onglet principal introuvable',
                "L'onglet principal Tun Job Portal n'est plus disponible. Retournez à la page des offres pour postuler.",
                'warning'
              );
              return;
            }

            window.opener.__tunJobApplyFromIsolated(${Number(job.id)}, answers);
            window.opener.focus();
          }
        </script>
      </body>
      </html>
    `);
    isolatedWindow.document.close();
  }

  onOpenApplyModal(job: any) {
    const token = localStorage.getItem('token');
    if (!token) {
      this.showAuthRequiredPopup = true;
      this.cdr.detectChanges();
      return;
    }

    if (job.has_quiz) {
      this.onViewJobDetails(job);
      return;
    }

    this.jobToApply = job;
    this.showConfirmApplyPopup = true;
    this.cdr.detectChanges();
  }

  goToLogin() {
    this.showAuthRequiredPopup = false;
    this.router.navigate(['/login']);
  }

  onQuizAnswerChange(event: { questionId: number; choiceId: number }) {
    this.quizAnswers[event.questionId] = event.choiceId;
    this.cdr.detectChanges();
  }

  private buildQuizAnswers(): QuizAnswerPayload[] {
    return Object.entries(this.quizAnswers).map(([questionId, choiceId]) => ({
      question_id: Number(questionId),
      choice_id: Number(choiceId),
    }));
  }

  canSubmitApply(): boolean {
    const job = this.selectedJob || this.jobToApply;
    if (!job) return false;
    if (!job.has_quiz || !this.jobQuiz?.questions?.length) return true;
    return this.jobQuiz.questions.every((q: any) => this.quizAnswers[q.id]);
  }

  onRequestApplyConfirmation() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.showAuthRequiredPopup = true;
      this.cdr.detectChanges();
      return;
    }

    const job = this.selectedJob || this.jobToApply;
    if (!job) return;

    if (!this.canSubmitApply()) {
      this.applyError = 'Veuillez répondre à toutes les questions du quiz.';
      this.cdr.detectChanges();
      return;
    }

    this.jobToApply = job;
    this.applyError = '';
    this.applyPopupSuccess = false;
    this.showConfirmApplyPopup = true;
    this.cdr.detectChanges();
  }

  onCancelApplyConfirmation() {
    this.showConfirmApplyPopup = false;
    this.applyPopupSuccess = false;
    this.applyError = '';
    if (!this.selectedJob) {
      this.jobToApply = null;
    }
    this.cdr.detectChanges();
  }

  executeApplySubmit() {
    const job = this.selectedJob || this.jobToApply;
    if (!job || !this.canSubmitApply()) {
      this.applyError = 'Veuillez répondre à toutes les questions du quiz.';
      this.cdr.detectChanges();
      return;
    }

    this.isSubmitting = true;
    this.applyError = '';
    const answers = job.has_quiz ? this.buildQuizAnswers() : [];

    this.applicationService.applyToJob(job.id, answers).subscribe({
      next: () => {
        job.isAlreadyApplied = true;
        const inList = this.allJobs.find((j) => j.id === job.id);
        if (inList) inList.isAlreadyApplied = true;
        this.isSubmitting = false;
        this.applyPopupSuccess = true;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.showConfirmApplyPopup = false;
          this.applyPopupSuccess = false;
          this.jobToApply = null;
          this.onCloseModal();
          this.cdr.detectChanges();
        }, 2200);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.applyError = err.error?.message || 'Erreur lors de la transmission.';
        this.cdr.detectChanges();
      },
    });
  }
}
