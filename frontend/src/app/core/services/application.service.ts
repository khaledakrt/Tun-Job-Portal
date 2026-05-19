import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private apiUrl = 'http://localhost:3000/api'; // Ajustez selon l'URL de votre API Express

  // Utilisation de fetch natif encapsulé dans un Observable RxJS
  applyToJob(jobId: string): Observable<any> {
    const token = localStorage.getItem('token');
    const promise = fetch(`${this.apiUrl}/candidate/apply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify({ job_id: jobId })
    }).then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    });

    return from(promise);
  }

  getHistory(): Observable<any> {
    const token = localStorage.getItem('token');
    const promise = fetch(`${this.apiUrl}/candidate/history`, {
      method: 'GET',
      headers: {
        'Authorization': token ? `Bearer ${token}` : ''
      }
    }).then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    });

    return from(promise);
  }
}
