import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/admin`;

  // 🛡️ MÉTHODE PRIVÉE : Récupère le jeton JWT et génère les Headers de sécurité
  private getAuthHeaders(): { headers: HttpHeaders } {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Injecte le jeton pour passer la barrière verifyToken
      })
    };
  }

  // 📊 Récupérer les compteurs du tableau de bord (Corrigé avec Headers)
  getDashboardStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dashboard-stats`, this.getAuthHeaders());
  }

  // 👥 Récupérer tous les candidats et recruteurs (Corrigé avec Headers)
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`, this.getAuthHeaders());
  }

  // 🚫 Supprimer un utilisateur définitivement (Corrigé avec Headers)
  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`, this.getAuthHeaders());
  }

  // 💼 Récupérer l'intégralité des offres d'emploi (Corrigé avec Headers)
  getAllJobs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/jobs`, this.getAuthHeaders());
  }

  // �️ Récupérer toutes les candidatures pour modération admin
  getAllApplications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/applications`, this.getAuthHeaders());
  }

  // 🗑️ Supprimer une offre d'emploi non conforme (Corrigé avec Headers)
  deleteJob(jobId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/jobs/${jobId}`, this.getAuthHeaders());
  }

  // 🗑️ Supprimer une candidature non conforme
  deleteApplication(applicationId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/applications/${applicationId}`, this.getAuthHeaders());
  }

  // 🏢 Valider ou révoquer la certification d'une entreprise recruteur
  toggleCompanyVerification(userId: number, status: number): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/users/${userId}/verify-company`, 
      { status }, 
      this.getAuthHeaders()
    );
  }

}
