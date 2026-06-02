import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface QuizAnswerPayload {
  question_id: number;
  choice_id: number;
}

@Injectable({ providedIn: 'root' })
export class ApplicationService {
  private http = inject(HttpClient);
  private api = `${environment.apiUrl}/candidate`;

  applyToJob(jobId: number, quizAnswers: QuizAnswerPayload[] = []): Observable<any> {
    return this.http.post(`${this.api}/apply`, {
      job_id: jobId,
      quiz_answers: quizAnswers,
    });
  }

  getHistory(): Observable<any> {
    return this.http.get(`${this.api}/history`);
  }

  getSavedJobs(): Observable<any> {
    return this.http.get(`${this.api}/saved-jobs`);
  }

  toggleSavedJob(jobId: number): Observable<any> {
    return this.http.post(`${this.api}/saved-jobs/toggle`, { job_id: jobId });
  }

  getJobAlerts(): Observable<any> {
    return this.http.get(`${this.api}/job-alerts`);
  }

  createJobAlert(payload: {
    title_keyword?: string;
    location_keyword?: string;
    contract_type?: string;
    experience_level?: string;
  }): Observable<any> {
    return this.http.post(`${this.api}/job-alerts`, payload);
  }

  deleteJobAlert(alertId: number): Observable<any> {
    return this.http.delete(`${this.api}/job-alerts/${alertId}`);
  }

  updateJobAlert(alertId: number, payload: {
    title_keyword?: string;
    location_keyword?: string;
    contract_type?: string;
    experience_level?: string;
    is_active?: boolean;
  }): Observable<any> {
    return this.http.patch(`${this.api}/job-alerts/${alertId}`, payload);
  }
}
