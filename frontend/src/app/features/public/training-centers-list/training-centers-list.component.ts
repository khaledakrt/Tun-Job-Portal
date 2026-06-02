import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-training-centers-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './training-centers-list.component.html',
  styleUrls: ['./training-centers-list.component.css']
})
export class TrainingCentersListComponent implements OnInit {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  centers: any[] = [];
  isLoading = true;
  isLoggedIn = false;
  assetsUrl = environment.assetsUrl;
  searchTerm = '';
  searchLocation = '';
  selectedCenter: any = null;

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('token');
    this.fetchCenters();
  }

  fetchCenters() {
    this.http.get<any>(`${environment.apiUrl}/public/training-centers`).subscribe({
      next: (data) => {
        this.centers = data.centers || [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  get filteredCenters(): any[] {
    return this.centers.filter((center) => {
      const name = (center.name || '').toLowerCase();
      const address = (center.address || '').toLowerCase();
      const term = this.searchTerm.toLowerCase();
      const location = this.searchLocation.toLowerCase();
      return (!term || name.includes(term)) && (!location || address.includes(location));
    });
  }

  get centersCount(): number {
    return this.centers.length;
  }

  get citiesCount(): number {
    return new Set(
      this.centers
        .map((center) => this.getCenterCity(center.address))
        .filter(Boolean)
    ).size;
  }

  get contactReadyCount(): number {
    return this.centers.filter((center) => !!center.email || !!center.phone).length;
  }

  getCenterLogo(center: any): string {
    return center.company_logo
      ? `${this.assetsUrl}/logos/${center.company_logo}`
      : 'assets/images/default-avatar.png';
  }

  getCenterCity(address: string): string {
    if (!address) return 'Tunisie';
    const parts = address.split(',').map((part) => part.trim()).filter(Boolean);
    return parts[parts.length - 1] || address;
  }

  onResetFilters() {
    this.searchTerm = '';
    this.searchLocation = '';
    this.cdr.detectChanges();
  }

  onViewCenterDetails(center: any) {
    this.selectedCenter = center;
    this.cdr.detectChanges();
  }

  onCloseCenterModal() {
    this.selectedCenter = null;
    this.cdr.detectChanges();
  }
}