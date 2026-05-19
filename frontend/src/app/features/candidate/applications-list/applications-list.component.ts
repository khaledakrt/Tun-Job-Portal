import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applications-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.css']
})
export class ApplicationsListComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);

  historyList: any[] = [];
  isLoading: boolean = true;
  selectedRecruiter: any = null; // 🚀 Gère le recruteur sélectionné pour la pop-up

  ngOnInit() {
    this.fetchCandidateHistory();
  }

  fetchCandidateHistory() {
    const targetUrl = 'http://localhost:3000/api/candidate/history';
    const token = localStorage.getItem('token');

    fetch(targetUrl, {
      method: 'GET',
      headers: { 'Authorization': token ? `Bearer ${token}` : '' }
    })
    .then(async res => {
      if (!res.ok) throw new Error("Impossible de lire votre historique de postulation.");
      return res.json();
    })
    .then(data => {
      this.historyList = data.history || [];
      this.isLoading = false;
      this.cdr.detectChanges();
    })
    .catch(err => {
      console.error("❌ Erreur historique candidat :", err);
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }

  // 🚀 REQUÊTE DYNAMIQUE POUR APPELER LE PROFIL DE L'ENTREPRISE AU CLIC
  onViewRecruiterProfile(recruiterId: number) {
    if (!recruiterId) return;
    const token = localStorage.getItem('token');
    const targetUrl = `http://localhost:3000/api/candidate/profile/details-public/${recruiterId}`;
    
    fetch(targetUrl, {
      method: 'GET',
      headers: { 'Authorization': token ? `Bearer ${token}` : '' }
    })
    .then(res => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then(data => {
      this.selectedRecruiter = data;
      this.cdr.detectChanges();
    })
    .catch(() => {
      alert("Impossible de charger le profil de l'entreprise.");
    });
  }

  onCloseRecruiterModal() {
    this.selectedRecruiter = null;
    this.cdr.detectChanges();
  }
}
