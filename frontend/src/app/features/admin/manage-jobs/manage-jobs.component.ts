 
import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-manage-jobs',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, FormsModule],
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})
export class ManageJobsComponent implements OnInit {
  private adminService = inject(AdminService);
  private cdr = inject(ChangeDetectorRef);

  jobsList: any[] = [];
  isLoading = false;
  searchTerm = '';
  selectedJob: any = null;
  showJobCard = false;
  selectedRecruiter: any = null;
  showRecruiterCard = false;

  get filteredJobs(): any[] {
    if (!this.searchTerm || !this.searchTerm.trim()) {
      return this.jobsList;
    }
    const q = this.searchTerm.toLowerCase();
    return this.jobsList.filter(job =>
      (job.title || '').toLowerCase().includes(q) ||
      (job.company_name || job.recruiter_name || '').toLowerCase().includes(q) ||
      (job.location || '').toLowerCase().includes(q) ||
      (job.contract_type || '').toLowerCase().includes(q)
    );
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.adminService.getAllJobs().subscribe({
      next: (data) => {
        this.jobsList = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => this.isLoading = false
    });
  }

  onDeleteJob(jobId: number): void {
    if (confirm("❌ Voulez-vous vraiment retirer cette offre d'emploi de Tun-Job ?")) {
      this.adminService.deleteJob(jobId).subscribe({
        next: () => {
          this.jobsList = this.jobsList.filter(j => j.id !== jobId);
          this.cdr.detectChanges();
        }
      });
    }
  }

  openJobCard(job: any): void {
    this.selectedJob = job;
    this.showJobCard = true;
    this.showRecruiterCard = false;
    this.selectedRecruiter = null;
  }

  closeJobCard(): void {
    this.showJobCard = false;
    this.selectedJob = null;
  }

  openRecruiterCard(job: any): void {
    this.selectedRecruiter = {
      name: job.company_name || job.recruiter_name || 'Recruteur',
      email: job.recruiter_email || '—',
      phone: job.recruiter_phone || '—',
      address: job.recruiter_address || '—',
      company_name: job.company_name || job.recruiter_name || '—',
      is_verified_company: job.is_verified_company,
      job_title: job.title || '—',
      location: job.location || '—',
      contract_type: job.contract_type || '—'
    };
    this.showRecruiterCard = true;
    this.showJobCard = false;
    this.selectedJob = null;
  }

  closeRecruiterCard(): void {
    this.showRecruiterCard = false;
    this.selectedRecruiter = null;
  }

  getJobSkills(skillsText: string | null | undefined): string[] {
    if (!skillsText) {
      return [];
    }
    return skillsText.split(',').map((skill) => skill.trim()).filter((skill) => skill.length > 0);
  }

  getJobLanguages(languagesText: string | null | undefined): string[] {
    if (!languagesText) {
      return [];
    }
    return languagesText.split(',').map((language) => language.trim()).filter((language) => language.length > 0);
  }
}
