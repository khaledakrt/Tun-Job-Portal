import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-applications-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.css']
})
export class ApplicationsListComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);

  historyList: any[] = [];
  isLoading: boolean = true;
  selectedRecruiter: any = null; // 🚀 Gère le recruteur sélectionné pour la pop-up
  selectedJob: any = null;       // 🚀 Gère l'offre sélectionnée pour la pop-up de détails
  selectedInterview: any = null;
  assetsUrl = environment.assetsUrl;
  searchTerm: string = '';
  selectedStatus: string = 'all';
  currentPage: number = 1;
  pageSize: number = 6;
  isConfirmingInterview: boolean = false;
  interviewConfirmMessage: string = '';

  get totalApplications(): number {
    return this.historyList.length;
  }

  get pendingApplications(): number {
    return this.historyList.filter((app) => app.status === 'Nouveau' || app.status === 'en_attente').length;
  }

  get interviewApplications(): number {
    return this.historyList.filter((app) => app.status === 'Entretien').length;
  }

  get positiveApplications(): number {
    return this.historyList.filter((app) =>
      app.status === 'retenu' || app.status === 'Acceptée' || app.status === 'Proposition'
    ).length;
  }

  get filteredApplications(): any[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.historyList.filter((app) => {
      const matchesSearch = !term ||
        `${app.job_title || ''} ${app.company_name || ''} ${app.location || ''}`.toLowerCase().includes(term);
      const matchesStatus = this.selectedStatus === 'all' || this.getStatusGroup(app.status) === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredApplications.length / this.pageSize));
  }

  get paginatedApplications(): any[] {
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredApplications.slice(start, start + this.pageSize);
  }

  get paginationPages(): number[] {
    const pages: number[] = [];
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, start + 4);

    for (let page = start; page <= end; page++) {
      pages.push(page);
    }

    return pages;
  }

  get paginationStart(): number {
    if (!this.filteredApplications.length) return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get paginationEnd(): number {
    return Math.min(this.currentPage * this.pageSize, this.filteredApplications.length);
  }

  getStatusGroup(status: string): 'pending' | 'interview' | 'accepted' | 'rejected' | 'other' {
    if (status === 'Nouveau' || status === 'en_attente') return 'pending';
    if (status === 'Entretien') return 'interview';
    if (status === 'retenu' || status === 'Acceptée' || status === 'Proposition') return 'accepted';
    if (status === 'refuse' || status === 'Refusée' || status === 'Rejete') return 'rejected';
    return 'other';
  }

  getStatusLabel(status: string): string {
    const group = this.getStatusGroup(status);
    if (group === 'pending') return 'En attente';
    if (group === 'interview') return 'Entretien';
    if (group === 'accepted') return 'Retenu';
    if (group === 'rejected') return 'Refusé';
    return status || 'Non défini';
  }

  resetFilters() {
    this.searchTerm = '';
    this.selectedStatus = 'all';
    this.currentPage = 1;
  }

  onFiltersChange() {
    this.currentPage = 1;
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;
    this.currentPage = page;
  }

  goToPreviousPage() {
    this.setPage(this.currentPage - 1);
  }

  goToNextPage() {
    this.setPage(this.currentPage + 1);
  }

  ngOnInit() {
    this.fetchCandidateHistory();
  }

  fetchCandidateHistory() {
    const targetUrl = `${environment.apiUrl}/candidate/history`;
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
    const targetUrl = `${environment.apiUrl}/candidate/profile/details-public/${recruiterId}`;
    
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

  // 🚀 INTERCEPTE LE CLIC SUR LE TITRE DU POSTE POUR CONSTUIRE L'OBJET DE LA MODALE
  onViewJobDetails(app: any) {
    if (!app) return;
    this.selectedJob = {
      id: app.job_id || app.id,
      title: app.job_title || app.title,
      company_name: app.company_name || 'REC',
      contract_type: app.contract_type || 'CDI',
      location: app.location || 'Tunisie',
      workplace_type: app.workplace_type || null,
      salary: app.salary || null,
      experience_level: app.experience_level || null,
      company_desc: app.company_desc || null,
      missions_desc: app.missions_desc || 'Aucune description des missions disponible.',
      profile_desc: app.profile_desc || 'Aucun prérequis spécifié.',
      skills_desc: app.skills_desc || null,
      languages_desc: app.languages_desc || null,
      expires_at: app.expires_at || null,
      company_logo: app.company_logo || null,
      recruiter_id: app.recruiter_id,
      application_id: app.application_id,
      timeline: app.timeline || [],
      interview_scheduled_at: app.interview_scheduled_at || null,
      interview_mode: app.interview_mode || null,
      interview_meeting_link: app.interview_meeting_link || null,
      interview_location: app.interview_location || null,
      interview_message: app.interview_message || null,
      interview_candidate_response: app.interview_candidate_response || 'pending',
      interview_responded_at: app.interview_responded_at || null,
    };
    this.interviewConfirmMessage = '';
    this.cdr.detectChanges();
  }

  onViewInterviewDetails(app: any) {
    if (!app?.interview_scheduled_at) return;
    this.selectedInterview = {
      application_id: app.application_id,
      job_title: app.job_title,
      company_name: app.company_name,
      interview_scheduled_at: app.interview_scheduled_at,
      interview_mode: app.interview_mode || 'En ligne',
      interview_meeting_link: app.interview_meeting_link || null,
      interview_location: app.interview_location || null,
      interview_message: app.interview_message || null,
      interview_candidate_response: app.interview_candidate_response || 'pending',
      interview_responded_at: app.interview_responded_at || null,
    };
    this.interviewConfirmMessage = '';
    this.cdr.detectChanges();
  }

  confirmInterviewPresence() {
    const target = this.selectedInterview || this.selectedJob;
    if (!target?.application_id || target.interview_candidate_response === 'confirmed') return;

    const token = localStorage.getItem('token');
    this.isConfirmingInterview = true;
    this.interviewConfirmMessage = '';

    fetch(`${environment.apiUrl}/candidate/applications/${target.application_id}/interview/confirm`, {
      method: 'POST',
      headers: {
        'Authorization': token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json'
      }
    })
    .then(async res => {
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || 'Impossible de confirmer cet entretien.');
      return data;
    })
    .then(data => {
      target.interview_candidate_response = data.candidate_response || 'confirmed';
      target.interview_responded_at = data.responded_at || new Date().toISOString();
      this.interviewConfirmMessage = data.message || 'Votre présence est confirmée.';

      const index = this.historyList.findIndex((item) => item.application_id === target.application_id);
      if (index !== -1) {
        this.historyList[index].interview_candidate_response = target.interview_candidate_response;
        this.historyList[index].interview_responded_at = target.interview_responded_at;
      }

      this.isConfirmingInterview = false;
      this.cdr.detectChanges();
    })
    .catch((err) => {
      this.interviewConfirmMessage = err.message;
      this.isConfirmingInterview = false;
      this.cdr.detectChanges();
    });
  }

  openIsolatedJobOffer() {
    if (!this.selectedJob?.id) return;
    window.open(`/jobs/${this.selectedJob.id}?from=applications`, '_blank', 'noopener');
  }

  onCloseInterviewModal() {
    this.selectedInterview = null;
    this.interviewConfirmMessage = '';
    this.cdr.detectChanges();
  }

  onCloseJobModal() {
    this.selectedJob = null;
    this.interviewConfirmMessage = '';
    this.cdr.detectChanges();
  }

  // 🌟 Découpe les compétences textuelles de la base MySQL pour la boucle Angular
  getSearchJobSkillsArray(skillsText: string): string[] {
    if (!skillsText) return [];
    return skillsText.split(',').map(s => s.trim()).filter(s => s !== '');
  }

  // 🌟 Découpe les langues textuelles de la base MySQL pour la boucle Angular
  getSearchJobLanguagesArray(langText: string): string[] {
    if (!langText) return [];
    return langText.split(',').map(s => s.trim()).filter(s => s !== '');
  }
}
