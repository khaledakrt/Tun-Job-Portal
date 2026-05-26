import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { QuizService } from '../../../core/services/quiz.service';

@Component({
  selector: 'app-ats-pipeline',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './ats-pipeline.component.html',
  styleUrls: ['./ats-pipeline.component.css'],
})
export class AtsPipelineComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  private http = inject(HttpClient);
  private quizService = inject(QuizService);

  applicationsList: any[] = [];
  selectedApplication: any = null;

  quizAnswersData: {
    has_quiz: boolean;
    quiz_title: string | null;
    answers: any[];
  } | null = null;
  isLoadingQuizAnswers = false;

  selectedJobTitle: string = 'all';

  ngOnInit() {
    this.fetchApplications();
  }

  fetchApplications() {
    this.http
      .get<{ applications: any[] }>(`${environment.apiUrl}/recruiter/ats/applications`)
      .subscribe({
        next: (data) => {
          this.applicationsList =
            data && Array.isArray(data.applications) ? data.applications : [];
          this.cdr.detectChanges();
        },
        error: (err) => console.error('Erreur ATS :', err),
      });
  }

  getFilteredCandidatesCount(jobTitle: string): number {
    return this.applicationsList.filter((app) => {
      if (jobTitle !== 'all' && app.job_title !== jobTitle) return false;
      if (!app.status) return true;
      const currentStatus = app.status.toLowerCase().trim();
      return (
        currentStatus.includes('nouv') ||
        currentStatus.includes('att') ||
        currentStatus === 'pending' ||
        currentStatus.includes('entre') ||
        currentStatus.includes('tech') ||
        currentStatus.includes('prop') ||
        currentStatus.includes('offr')
      );
    }).length;
  }

  getUniqueJobTitles(): string[] {
    if (!this.applicationsList) return [];

    const visibleApps = this.applicationsList.filter((app) => {
      if (!app.status) return true;
      const currentStatus = app.status.toLowerCase().trim();
      return (
        currentStatus.includes('nouv') ||
        currentStatus.includes('att') ||
        currentStatus === 'pending' ||
        currentStatus.includes('entre') ||
        currentStatus.includes('tech') ||
        currentStatus.includes('prop') ||
        currentStatus.includes('offr')
      );
    });

    const titles = visibleApps.map((app) => app.job_title).filter((title) => !!title);
    return [...new Set(titles)];
  }

  onJobFilterChange(event: any) {
    this.selectedJobTitle = event.target.value;
    this.cdr.detectChanges();
  }

  changeCandidateStatus(applicationId: number, newStatus: string) {
    this.http
      .post(`${environment.apiUrl}/recruiter/ats/update-status`, {
        id: applicationId,
        status: newStatus,
      })
      .subscribe({
        next: () => {
          const appIndex = this.applicationsList.findIndex((a) => a.id === applicationId);
          if (appIndex !== -1) {
            this.applicationsList[appIndex].status = newStatus;
          }
          this.onCloseDetails();
        },
        error: () => alert('Impossible de modifier le statut.'),
      });
  }

  getCandidatesByStatus(statusName: string): any[] {
    return this.applicationsList.filter((app) => {
      if (this.selectedJobTitle !== 'all' && app.job_title !== this.selectedJobTitle) {
        return false;
      }

      if (!app.status) return statusName === 'Nouveau';

      const currentStatus = app.status.toLowerCase().trim();
      if (statusName === 'Nouveau')
        return (
          currentStatus.includes('nouv') ||
          currentStatus.includes('att') ||
          currentStatus === 'pending'
        );
      if (statusName === 'Entretien')
        return currentStatus.includes('entre') || currentStatus.includes('tech');
      if (statusName === 'Proposition')
        return currentStatus.includes('prop') || currentStatus.includes('offr');

      return false;
    });
  }

  onSelectApplication(app: any) {
    this.selectedApplication = { ...app };
    this.quizAnswersData = null;
    this.isLoadingQuizAnswers = true;
    this.cdr.detectChanges();

    this.quizService.getApplicationQuizAnswers(app.id).subscribe({
      next: (data) => {
        this.quizAnswersData = data;
        this.isLoadingQuizAnswers = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.quizAnswersData = { has_quiz: false, quiz_title: null, answers: [] };
        this.isLoadingQuizAnswers = false;
        this.cdr.detectChanges();
      },
    });
  }

  onCloseDetails() {
    this.selectedApplication = null;
    this.quizAnswersData = null;
    this.isLoadingQuizAnswers = false;
    this.cdr.detectChanges();
  }

  openCandidateCV(candidateId: number) {
    if (!candidateId) return;
    window.open(`/candidate/cv-view/${candidateId}`, '_blank');
  }

  logoUrl(filename: string | null): string {
    return filename ? `${environment.assetsUrl}/logos/${filename}` : 'assets/images/default-avatar.png';
  }
}
