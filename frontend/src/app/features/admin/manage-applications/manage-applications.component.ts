import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-manage-applications',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, FormsModule],
  templateUrl: './manage-applications.component.html',
  styleUrls: ['./manage-applications.component.css']
})
export class ManageApplicationsComponent implements OnInit {
  private adminService = inject(AdminService);
  private cdr = inject(ChangeDetectorRef);

  applications: any[] = [];
  isLoading = false;
  searchTerm = '';
  selectedApplication: any = null;
  showApplicationCard = false;

  get filteredApplications(): any[] {
    if (!this.searchTerm || !this.searchTerm.trim()) {
      return this.applications;
    }
    const q = this.searchTerm.toLowerCase();
    return this.applications.filter(app =>
      (app.candidate_name || '').toLowerCase().includes(q) ||
      (app.job_title || '').toLowerCase().includes(q) ||
      (app.recruiter_name || app.company_name || '').toLowerCase().includes(q) ||
      (app.status || '').toLowerCase().includes(q)
    );
  }

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications(): void {
    this.isLoading = true;
    this.adminService.getAllApplications().subscribe({
      next: (data) => {
        this.applications = data;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  onDeleteApplication(applicationId: number): void {
    if (!confirm('❌ Voulez-vous vraiment supprimer cette candidature ?')) {
      return;
    }

    this.adminService.deleteApplication(applicationId).subscribe({
      next: () => {
        this.applications = this.applications.filter(app => app.id !== applicationId);
        this.cdr.detectChanges();
      }
    });
  }

  openApplicationCard(application: any): void {
    this.selectedApplication = application;
    this.showApplicationCard = true;
  }

  closeApplicationCard(): void {
    this.showApplicationCard = false;
    this.selectedApplication = null;
  }
}
