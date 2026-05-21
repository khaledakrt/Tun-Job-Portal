 
import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { AdminService } from '../../../core/services/admin.service';

@Component({
  selector: 'app-manage-jobs',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})
export class ManageJobsComponent implements OnInit {
  private adminService = inject(AdminService);
  private cdr = inject(ChangeDetectorRef);

  jobsList: any[] = [];
  isLoading = false;

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
}
