import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = environment.apiUrl;

  private getHeaders() {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    };
  }

  searchJobs(): Observable<any[]> {
    const promise = fetch(`${this.apiUrl}/candidate/jobs/list`, {
      method: 'GET',
      headers: this.getHeaders()
    }).then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    });
    return from(promise);
  }

  create(jobData: any): Observable<any> {
    const promise = fetch(`${this.apiUrl}/recruiter/jobs/create`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(jobData)
    }).then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    });
    return from(promise);
  }

  getRecruiterJobs(): Observable<any[]> {
    const promise = fetch(`${this.apiUrl}/recruiter/jobs/list`, {
      method: 'GET',
      headers: this.getHeaders()
    }).then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    });
    return from(promise);
  }

  toggleStatus(id: string, status: string): Observable<any> {
    const promise = fetch(`${this.apiUrl}/recruiter/jobs/toggle-status`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ jobId: id })
    }).then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    });
    return from(promise);
  }
    getStats(): Observable<any> {
    const promise = fetch(`${this.apiUrl}/recruiter/stats`, {
      method: 'GET',
      headers: this.getHeaders()
    }).then(res => {
      if (!res.ok) throw new Error("Erreur lors de la récupération des stats");
      return res.json();
    });
    return from(promise);
  }

}
