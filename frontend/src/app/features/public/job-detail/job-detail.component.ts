import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { ApplicationService, QuizAnswerPayload } from '../../../core/services/application.service';
import { QuizService } from '../../../core/services/quiz.service';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
})
export class JobDetailComponent implements OnInit {
  readonly environment = environment;
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private quizService = inject(QuizService);
  private applicationService = inject(ApplicationService);

  job: any = null;
  jobQuiz: any = null;
  quizAnswers: Record<number, number> = {};
  isLoading = true;
  isLoadingQuiz = false;
  isSubmitting = false;
  showAuthRequiredPopup = false;
  showConfirmApplyPopup = false;
  applyPopupSuccess = false;
  applyError = '';
  currentRole = '';
  currentUserName = '';
  openedFromApplications = false;

  ngOnInit() {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    const token = localStorage.getItem('token');
    this.currentRole = localStorage.getItem('role') || '';
    this.currentUserName = localStorage.getItem('name') || '';
    this.openedFromApplications =
      this.route.snapshot.queryParamMap.get('from') === 'applications' &&
      !!token;

    if (!jobId) {
      this.isLoading = false;
      return;
    }

    this.http.get<any>(`${environment.apiUrl}/candidate/jobs/list`).subscribe({
      next: (data) => {
        const jobs = Array.isArray(data) ? data : data?.jobs || [];
        this.job = jobs.find((item: any) => Number(item.id) === jobId) || null;
        this.isLoading = false;
        if (this.job?.has_quiz) {
          this.loadQuiz(jobId);
        }
        this.resolveAlreadyAppliedState(jobId);
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    });
  }

  private resolveAlreadyAppliedState(jobId: number) {
    if (!localStorage.getItem('token')) {
      this.openedFromApplications = false;
      return;
    }

    this.applicationService.getHistory().subscribe({
      next: (data) => {
        const history = data?.history || [];
        const alreadyApplied = history.some((application: any) => Number(application.job_id) === jobId);
        this.openedFromApplications = this.openedFromApplications || alreadyApplied;
        this.cdr.detectChanges();
      },
      error: () => {
        this.cdr.detectChanges();
      },
    });
  }

  loadQuiz(jobId: number) {
    this.isLoadingQuiz = true;
    this.quizService.getQuizForJob(jobId, true).subscribe({
      next: (res) => {
        this.jobQuiz = res.has_quiz ? res.quiz : null;
        this.isLoadingQuiz = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.jobQuiz = null;
        this.isLoadingQuiz = false;
        this.cdr.detectChanges();
      },
    });
  }

  logoUrl(filename: string | null): string {
    return filename ? `${environment.assetsUrl}/logos/${filename}` : 'assets/images/default-avatar.png';
  }

  getTextList(value: string): string[] {
    return value ? value.split(',').map((item) => item.trim()).filter(Boolean) : [];
  }

  onQuizAnswerChange(questionId: number, choiceId: number) {
    this.quizAnswers[questionId] = choiceId;
    this.cdr.detectChanges();
  }

  canSubmitApply(): boolean {
    if (!this.job) return false;
    if (this.openedFromApplications) return false;
    if (!this.job.has_quiz || !this.jobQuiz?.questions?.length) return true;
    return this.jobQuiz.questions.every((question: any) => this.quizAnswers[question.id]);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  isCandidateConnected(): boolean {
    return this.isLoggedIn() && this.currentRole === 'candidate';
  }

  applyButtonLabel(): string {
    if (this.openedFromApplications) return 'Candidature déjà envoyée';
    if (!this.isLoggedIn()) return 'Se connecter pour postuler';
    if (!this.isCandidateConnected()) return 'Consultation uniquement';
    return 'Postuler à cette offre';
  }

  onRequestApply() {
    if (!localStorage.getItem('token')) {
      this.showAuthRequiredPopup = true;
      this.cdr.detectChanges();
      return;
    }

    if (this.openedFromApplications) {
      this.applyError = 'Vous avez déjà envoyé votre candidature à cette offre.';
      this.cdr.detectChanges();
      return;
    }

    if (!this.isCandidateConnected()) {
      this.applyError = 'Seul un compte candidat peut postuler à une offre.';
      this.cdr.detectChanges();
      return;
    }

    if (!this.canSubmitApply()) {
      this.applyError = 'Veuillez répondre à toutes les questions du quiz avant de postuler.';
      this.cdr.detectChanges();
      return;
    }

    this.applyError = '';
    this.showConfirmApplyPopup = true;
    this.cdr.detectChanges();
  }

  onCancelApplyConfirmation() {
    this.showConfirmApplyPopup = false;
    this.applyPopupSuccess = false;
    this.applyError = '';
    this.cdr.detectChanges();
  }

  executeApplySubmit() {
    if (!this.job || !this.canSubmitApply()) {
      this.applyError = 'Veuillez répondre à toutes les questions du quiz avant de postuler.';
      this.cdr.detectChanges();
      return;
    }

    const answers: QuizAnswerPayload[] = Object.entries(this.quizAnswers).map(([questionId, choiceId]) => ({
      question_id: Number(questionId),
      choice_id: Number(choiceId),
    }));

    this.isSubmitting = true;
    this.applicationService.applyToJob(this.job.id, answers).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.applyPopupSuccess = true;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.isSubmitting = false;
        this.applyError = err.error?.message || 'Erreur lors de la transmission.';
        this.cdr.detectChanges();
      },
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToCandidateApplications() {
    this.router.navigate(['/candidate/applications-list']);
  }
}
