import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);

  allJobs: any[] = [];
  isLoading: boolean = true;
  selectedJob: any = null;
  selectedRecruiter: any = null; // 🚀 Stocke les infos de l'entreprise à afficher

  searchFilters = { title: '', location: '', experience: '', contract: '' };

  ngOnInit() { this.fetchAvailableJobs(); }

  fetchAvailableJobs() {
    const token = localStorage.getItem('token');
    const jobsPromise = fetch('http://localhost:3000/api/candidate/jobs/list', {
      method: 'GET', headers: { 'Authorization': token ? `Bearer ${token}` : '' }
    }).then(res => res.json());

    const historyPromise = fetch('http://localhost:3000/api/candidate/history', {
      method: 'GET', headers: { 'Authorization': token ? `Bearer ${token}` : '' }
    }).then(res => res.json()).catch(() => []);

    Promise.all([jobsPromise, historyPromise])
      .then(([jobsData, historyData]) => {
        const jobsList = Array.isArray(jobsData) ? jobsData : (jobsData.jobs || []);
        const historyList = Array.isArray(historyData) ? historyData : (historyData.history || []);
        const appliedJobIds = historyList.map((app: any) => app.job_id);

        this.allJobs = jobsList.map((job: any) => ({
          ...job,
          isAlreadyApplied: appliedJobIds.includes(job.id)
        }));
        this.isLoading = false;
        this.cdr.detectChanges();
      }).catch(() => { this.isLoading = false; });
  }

  // 🚀 INTERROGATION DYNAMIQUE DE LA BASE DE DONNÉES DU RECRUTEUR
  onViewRecruiterProfile(recruiterId: number) {
    if (!recruiterId) return;
    const token = localStorage.getItem('token');
    
    // On appelle une route existante ouverte ou candidat pour lire la table 'users'
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
      alert("Impossible de charger la fiche de cette entreprise pour le moment.");
    });
  }

  onCloseRecruiterModal() { this.selectedRecruiter = null; this.cdr.detectChanges(); }
  get filteredJobs() { return this.allJobs.filter(job => { const matchTitle = !this.searchFilters.title.trim() || job.title.toLowerCase().includes(this.searchFilters.title.toLowerCase()) || (job.company_name && job.company_name.toLowerCase().includes(this.searchFilters.title.toLowerCase())); const matchLocation = !this.searchFilters.location.trim() || job.location.toLowerCase().includes(this.searchFilters.location.toLowerCase()); const matchExperience = !this.searchFilters.experience || job.experience_level === this.searchFilters.experience; const matchContract = !this.searchFilters.contract || job.contract_type === this.searchFilters.contract; return matchTitle && matchLocation && matchExperience && matchContract; }); }
  get hasActiveFilters(): boolean { return !!(this.searchFilters.title.trim() || this.searchFilters.location.trim() || this.searchFilters.experience || this.searchFilters.contract); }
  onResetFilters() { this.searchFilters = { title: '', location: '', experience: '', contract: '' }; this.cdr.detectChanges(); }
  onViewJobDetails(job: any) { this.selectedJob = job; this.cdr.detectChanges(); }
  onCloseModal() { this.selectedJob = null; this.cdr.detectChanges(); }
  onOpenApplyModal(job: any) { if (confirm(`Confirmer la postulation ?`)) { const token = localStorage.getItem('token'); fetch('http://localhost:3000/api/candidate/apply', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': token ? `Bearer ${token}` : '' }, body: JSON.stringify({ job_id: job.id }) }).then(res => res.json()).then(() => { job.isAlreadyApplied = true; this.selectedJob = null; this.cdr.detectChanges(); }); } }
}
