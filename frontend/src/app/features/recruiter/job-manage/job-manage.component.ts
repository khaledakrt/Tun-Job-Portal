import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 🚀 OBLIGATOIRE pour la barre de recherche (ngModel)

@Component({
  selector: 'app-job-manage',
  standalone: true,
  imports: [CommonModule, FormsModule], // 🚀 Ajout de FormsModule ici
  templateUrl: './job-manage.component.html',
  styleUrls: ['./job-manage.component.css']
})
export class JobManageComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);

  jobsList: any[] = [];
  isLoading: boolean = true;
  selectedJob: any = null;

  // 🔍 Variables pour la recherche et pagination
  searchText: string = '';
  currentPage: number = 1;
  pageSize: number = 8; // 🚀 Fixé à 8 offres par page comme demandé

  ngOnInit() {
    this.fetchRecruiterJobs();
  }

  fetchRecruiterJobs() {
    const targetUrl = 'http://localhost:3000/api/recruiter/jobs/list';
    const token = localStorage.getItem('token');

    fetch(targetUrl, {
      method: 'GET',
      headers: { 'Authorization': token ? `Bearer ${token}` : '' }
    })
    .then(async res => {
      if (!res.ok) throw new Error("Impossible de charger les données.");
      return res.json();
    })
    .then(data => {
      this.jobsList = Array.isArray(data) ? data : (data.jobs || []);
      this.isLoading = false;
      this.cdr.detectChanges();
    })
    .catch(err => {
      console.error("Échec du chargement TunJob MySQL :", err);
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }

  // 🧮 CALCUL DES OFFRES FILTRÉES ET PAGINÉES
  get filteredJobs() {
    // 1. Applique le filtre de recherche (sur le titre ou la localisation)
    const filtered = this.jobsList.filter(job => 
      job.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      job.location.toLowerCase().includes(this.searchText.toLowerCase())
    );

    return filtered;
  }

  get paginatedJobs() {
    // 2. Découpe le tableau pour n'afficher que 8 éléments selon la page active
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredJobs.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredJobs.length / this.pageSize) || 1;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.cdr.detectChanges();
    }
  }

  // 重置 OnSearch pour revenir à la page 1 quand on tape du texte
  onSearchChange() {
    this.currentPage = 1;
  }

  // ACTIONS EXISTANTES (CONSERVÉES À L'IDENTIQUE)
  onViewJob(job: any) { this.selectedJob = job; this.cdr.detectChanges(); }
  onCloseModal() { this.selectedJob = null; this.cdr.detectChanges(); }
  onToggleStatus(job: any) {
    const targetUrl = 'http://localhost:3000/api/recruiter/jobs/toggle-status';
    const token = localStorage.getItem('token');
    fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': token ? `Bearer ${token}` : '' },
      body: JSON.stringify({ jobId: job.id })
    })
    .then(async res => { if (!res.ok) throw new Error("Erreur statut."); return res.json(); })
    .then(() => { job.status = (job.status === 'disponible' || job.status === 'Actif') ? 'masqué' : 'disponible'; this.cdr.detectChanges(); })
    .catch(err => alert(err.message));
  }
  
  onDeleteJob(jobId: number) {
    if (!confirm("Voulez-vous supprimer cette annonce ?")) return;
    const targetUrl = `http://localhost:3000/api/recruiter/jobs/delete/${jobId}`;
    const token = localStorage.getItem('token');
    fetch(targetUrl, { method: 'DELETE', headers: { 'Authorization': token ? `Bearer ${token}` : '' } })
    .then(async res => { if (!res.ok) throw new Error("Erreur suppression."); return res.json(); })
    .then(() => { this.jobsList = this.jobsList.filter(job => job.id !== jobId); this.currentPage = 1; this.cdr.detectChanges(); })
    .catch(err => alert(err.message));
  }

  // ==========================================================================
  // 🚀 🌟 COUPLAGE GRAPHIQUE DES BADGES COMPÉTENCES & LANGUES POUR LE HTML
  // ==========================================================================
  
  // Transforme la chaîne textuelle brute des compétences MySQL en un tableau de tags
  getJobSkillsArray(skillsText: string): string[] {
    if (!skillsText) return [];
    return skillsText.split(',').map(s => s.trim()).filter(s => s !== '');
  }

  // Transforme la chaîne textuelle brute des langues MySQL en un tableau de tags
  getJobLanguagesArray(langText: string): string[] {
    if (!langText) return [];
    return langText.split(',').map(s => s.trim()).filter(s => s !== '');
  }
  
}
