import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="public-header">
      <nav class="nav">
        <a routerLink="/" class="logo">
          <img 
            [src]="environment.assetsUrl + '/logo-tun-job-portal/logo-tun-job-portal.png'" 
            class="logo-img" 
            alt="Logo" 
            (error)="handleLogoError($event)">
          
        </a>
        <ul class="menu">
          @if (!isIsolatedJobPage) {
            <li><a routerLink="/job-search" routerLinkActive="active">Emplois</a></li>
            <li><a routerLink="/companies" routerLinkActive="active">Entreprises</a></li>
            <li><a routerLink="/training-centers" routerLinkActive="active">Formations</a></li>
            <li><a routerLink="/about">À propos</a></li>
            <li><a routerLink="/contact">Contact</a></li>
          }
          @if (isLoggedIn) {
            <li>
              <span class="nav-user-pill">
                <i class="bi bi-person-check-fill"></i>
                {{ userName || roleLabel }}
              </span>
            </li>
            <li><a [routerLink]="dashboardLink" class="nav-dashboard">Mon espace</a></li>
            <li>
              <button type="button" class="nav-logout" (click)="onLogout()">
                Déconnexion
              </button>
            </li>
          } @else {
            <li><a routerLink="/login" class="nav-login">Se connecter</a></li>
            <li><a routerLink="/register" class="nav-register">S'inscrire</a></li>
          }
        </ul>
      </nav>
    </header>

    <!-- 🕋 Structure 3 colonnes centralisée (wider spacers) -->
    <div [class.public-page-layout]="!isLoggedIn">
      
      @if (!isLoggedIn) {
        <aside class="side-spacer left-spacer"></aside>
      }

      <main class="public-main" [class.public-main-content]="!isLoggedIn">
        <router-outlet></router-outlet>
      </main>

      @if (!isLoggedIn) {
        <aside class="side-spacer right-spacer"></aside>
      }
    </div>

    <!-- 🦶 FOOTER : INFORMATIONS COMPLÉMENTAIRES (Visible uniquement si déconnecté) -->
    @if (!isLoggedIn) {
      <footer class="public-footer">
        <div class="footer-grid">
          <div class="footer-col">
            <ul>
              <li class="footer-head"><a routerLink="/">Accueil</a></li>
              <li><a routerLink="/contact">Contact</a></li>
              <li><a routerLink="/about">A propos</a></li>
              <li><a routerLink="/terms">Termes & Conditions</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <ul>
              <li class="footer-head"><a routerLink="/register">Employeur</a></li>
              <li><a routerLink="/register">Publier une annonce</a></li>
              <li><a routerLink="/job-search">Trouver un CV</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <ul>
              <li class="footer-head"><a routerLink="/login">Connexion</a></li>
              <li><a routerLink="/job-search">Chercheur d'emploi</a></li>
              <li><a routerLink="/job-search">Trouver un emploi</a></li>
              <li><a routerLink="/job-search">Guide Emploi par métier</a></li>
              <li><a routerLink="/training-centers">Trouver une formation</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <ul>
              <li class="footer-head"><a routerLink="/login">Connexion</a></li>
              <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
              <li><a href="https://viadeo.com" target="_blank">Viadeo</a></li>
              <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Tun Job Portal - Tous droits réservés.</p>
        </div>
      </footer>
    }
  `,
  styles: [
    `
      .public-header {
        position: sticky;
        top: 0;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.92);
        border-bottom: 1px solid #e2e8f0;
        backdrop-filter: blur(14px);
        padding: 10px 32px;
        color: #0f172a;
      }
      .nav {
        max-width: 1180px;
        margin: 0 auto;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap: 24px;
      }
      .logo { font-weight:800; color:white; text-decoration:none; display: flex; align-items: center; gap: 12px; }
      .logo-img {
        height: 58px;
        width: auto;
        object-fit: contain;
        border-radius: 12px;
        background: white;
        padding: 3px;
        box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
      }
      .menu { list-style:none; display:flex; align-items: center; gap:8px; margin:0; padding:0; flex-wrap: wrap; justify-content: flex-end; }
      .menu a {
        color:#334155;
        text-decoration:none;
        font-weight:800;
        font-size: 13px;
        padding: 9px 12px;
        border-radius: 999px;
        transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease;
      }
      .menu a:hover,
      .menu a.active {
        background: #ecfdf5;
        color: #0f766e;
      }
      .menu a.nav-login {
        border: 1px solid #dbe3ef;
        background: #ffffff;
      }
      .menu a.nav-register {
        color: #ffffff;
        background: linear-gradient(135deg, #12b395, #0ea5e9);
        box-shadow: 0 10px 24px rgba(18, 179, 149, 0.22);
      }
      .menu a.nav-register:hover {
        color: #ffffff;
        transform: translateY(-1px);
      }
      .nav-user-pill {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 8px 11px;
        border: 1px solid #bbf7d0;
        border-radius: 999px;
        color: #166534;
        background: #f0fdf4;
        font-size: 12px;
        font-weight: 900;
      }
      .menu a.nav-dashboard {
        color: #ffffff;
        background: linear-gradient(135deg, #4f46e5, #0ea5e9);
        box-shadow: 0 10px 24px rgba(79, 70, 229, 0.18);
      }
      .nav-logout {
        border: 1px solid #fecaca;
        border-radius: 999px;
        padding: 9px 12px;
        color: #b91c1c;
        background: #fff7f7;
        font-size: 13px;
        font-weight: 900;
        cursor: pointer;
      }
      .nav-logout:hover {
        background: #fee2e2;
      }
      .public-main { padding:24px; }

      /* 🚀 STRUCTURE 3 COLONNES AVEC MARGES DE 2CM */
      .public-page-layout {
        display: grid;
        grid-template-columns: minmax(24px, 1fr) minmax(0, 1180px) minmax(24px, 1fr);
        min-height: calc(100vh - 64px);
        background:
          radial-gradient(circle at 8% 4%, rgba(18, 179, 149, 0.08), transparent 28%),
          linear-gradient(180deg, #f8fafc 0%, #eef7f5 100%);
      }
      .side-spacer { background-color: #f8fafc; } 
      .public-main-content { padding: 28px 0 44px !important; }

      /* 🦶 STYLES DU FOOTER */
      .public-footer { 
        background: #0f172a; 
        color: white; 
        padding: 40px 80px 20px 80px; 
        border-top: 4px solid #12B395;
      }
      .footer-grid { 
        display: grid; 
        grid-template-columns: repeat(4, 1fr); 
        gap: 20px; 
        margin-bottom: 30px;
      }
      .footer-col ul { list-style: none; padding: 0; margin: 0; }
      .footer-col ul li { margin-bottom: 8px; }
      .footer-col ul li a { color: #cbd5e1; text-decoration: none; font-size: 14px; transition: color 0.2s; }
      .footer-col ul li a:hover { color: white; text-decoration: underline; }
      .footer-head a { color: #12B395 !important; font-weight: 700; font-size: 16px; margin-bottom: 5px; display: inline-block; }
      .footer-bottom { 
        border-top: 1px solid #334155; 
        padding-top: 20px; 
        text-align: center; 
        font-size: 12px; 
        color: #94a3b8; 
      }

      @media (max-width: 900px) {
        .public-header { padding: 10px 18px; }
        .nav { align-items: flex-start; flex-direction: column; }
        .menu { justify-content: flex-start; }
        .public-page-layout { grid-template-columns: 16px minmax(0, 1fr) 16px; }
        .footer-grid { grid-template-columns: repeat(2, 1fr); }
        .public-footer { padding: 34px 24px 18px; }
      }

      @media (max-width: 560px) {
        .logo-img { height: 48px; }
        .menu { width: 100%; gap: 6px; }
        .menu li { flex: 1 1 auto; }
        .menu a { display: block; text-align: center; }
        .footer-grid { grid-template-columns: 1fr; }
      }
    `,
  ],
})
export class PublicLayoutComponent implements OnInit {
  isLoggedIn = false;
  role = '';
  userName = '';
  roleLabel = 'Utilisateur';
  dashboardLink = '/job-search';
  environment = environment;

  constructor(private router: Router) {}

  get isIsolatedJobPage(): boolean {
    return /^\/jobs\/[^/]+/.test(this.router.url);
  }

  ngOnInit() {
    // Vérifie si l'utilisateur est connecté pour masquer les sidebars d'espacement
    this.isLoggedIn = !!localStorage.getItem('token');
    this.role = localStorage.getItem('role') || '';
    this.userName = localStorage.getItem('name') || '';
    this.roleLabel = this.getRoleLabel(this.role);
    this.dashboardLink = this.getDashboardLink(this.role);
  }

  private getRoleLabel(role: string): string {
    if (role === 'candidate') return 'Candidat';
    if (role === 'recruiter') return 'Recruteur';
    if (role === 'admin') return 'Admin';
    return 'Utilisateur';
  }

  private getDashboardLink(role: string): string {
    if (role === 'candidate') return '/candidate/job-search';
    if (role === 'recruiter') return '/recruiter';
    if (role === 'admin') return '/admin';
    return '/job-search';
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    localStorage.removeItem('is_verified_company');
    this.isLoggedIn = false;
    this.role = '';
    this.userName = '';
    this.roleLabel = 'Utilisateur';
    this.dashboardLink = '/job-search';
    this.router.navigate(['/login']);
  }

  handleLogoError(event: any) {
    const img = event.target;
    console.error("Échec du chargement du logo à l'adresse :", img.src);
    
    // Au lieu de cacher l'image, on peut mettre un placeholder ou 
    // essayer sans le préfixe '/uploads' si votre serveur est configuré ainsi :
    // img.src = this.environment.assetsUrl + '/logo-tun-job-portal.png';
  }
}
