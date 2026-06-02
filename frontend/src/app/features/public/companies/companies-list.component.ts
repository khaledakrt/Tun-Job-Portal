import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-companies-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  allCompanies: any[] = [];
  isLoading = true;
  isLoggedIn = false;
  assetsUrl = environment.assetsUrl;

  // 🚀 Propriétés de recherche et sélection
  searchTerm: string = '';
  searchLocation: string = '';
  selectedCompany: any = null;

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('token');
    this.fetchCompanies();
  }

  fetchCompanies() {
    this.http.get<any>(`${environment.apiUrl}/public/companies`).subscribe({
      next: (data) => {
        this.allCompanies = data.companies || [];
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  // 🔍 Getter pour filtrer la liste en temps réel
  get companies() {
    return this.allCompanies.filter(company => {
      const matchName = !this.searchTerm || 
        company.company_name?.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchLocation = !this.searchLocation || 
        company.address?.toLowerCase().includes(this.searchLocation.toLowerCase());
      return matchName && matchLocation;
    });
  }

  get companiesCount(): number {
    return this.allCompanies.length;
  }

  get citiesCount(): number {
    return new Set(
      this.allCompanies
        .map((company) => this.getCompanyCity(company.address))
        .filter(Boolean)
    ).size;
  }

  get contactReadyCount(): number {
    return this.allCompanies.filter((company) => !!company.email || !!company.phone).length;
  }

  getCompanyLogo(company: any): string {
    return company.company_logo
      ? `${this.assetsUrl}/logos/${company.company_logo}`
      : 'assets/images/default-avatar.png';
  }

  getCompanyCity(address: string): string {
    if (!address) return 'Tunisie';
    const parts = address.split(',').map((part) => part.trim()).filter(Boolean);
    return parts[parts.length - 1] || address;
  }

  getCompanyInitials(company: any): string {
    const name = company.company_name || company.name || 'TJ';
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part: string) => part[0])
      .join('')
      .toUpperCase();
  }

  // 🛠️ Méthodes d'actions
  onResetFilters() {
    this.searchTerm = '';
    this.searchLocation = '';
    this.cdr.detectChanges();
  }

  onViewCompanyDetails(company: any) {
    this.selectedCompany = company;
    this.cdr.detectChanges();
  }

  onCloseCompanyModal() {
    this.selectedCompany = null;
    this.cdr.detectChanges();
  }
}