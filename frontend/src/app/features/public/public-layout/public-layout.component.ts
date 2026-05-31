import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
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
          <li><a routerLink="/job-search" routerLinkActive="active">Emplois</a></li>
          <li><a routerLink="/companies" routerLinkActive="active">Entreprises</a></li>
          <li><a routerLink="/training-centers" routerLinkActive="active">Formations</a></li>
          <li><a routerLink="/register">S'inscrire</a></li>
          <li><a routerLink="/login">Se connecter</a></li>
          <li><a routerLink="/about">À propos</a></li>
          <li><a routerLink="/contact">Contact</a></li>
          <li><a routerLink="/terms">Termes</a></li>
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
      .public-header { background:#12B395; padding:12px 20px; color:white; }
      .nav { display:flex; align-items:center; justify-content:space-between; }
      .logo { font-weight:800; color:white; text-decoration:none; display: flex; align-items: center; gap: 12px; }
      .logo-img { height: 80px; width: auto; object-fit: contain; border-radius: 6px; background: white; padding: 1px; }
      .menu { list-style:none; display:flex; gap:18px; margin:0; padding:0; }
      .menu a { color:white; text-decoration:none; font-weight:600; }
      .public-main { padding:20px; }

      /* 🚀 STRUCTURE 3 COLONNES AVEC MARGES DE 2CM */
      .public-page-layout {
        display: grid;
        grid-template-columns: 80px 1fr 80px; /* Environ 2cm de chaque côté */
        min-height: calc(100vh - 64px);
        background-color: #f8fafc;
      }
      .side-spacer { background-color: #f8fafc; } 
      .public-main-content { padding: 20px 0 !important; }

      /* 🦶 STYLES DU FOOTER */
      .public-footer { 
        background: #1e293b; 
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
    `,
  ],
})
export class PublicLayoutComponent implements OnInit {
  isLoggedIn = false;
  environment = environment;

  ngOnInit() {
    // Vérifie si l'utilisateur est connecté pour masquer les sidebars d'espacement
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  handleLogoError(event: any) {
    const img = event.target;
    console.error("Échec du chargement du logo à l'adresse :", img.src);
    
    // Au lieu de cacher l'image, on peut mettre un placeholder ou 
    // essayer sans le préfixe '/uploads' si votre serveur est configuré ainsi :
    // img.src = this.environment.assetsUrl + '/logo-tun-job-portal.png';
  }
}
