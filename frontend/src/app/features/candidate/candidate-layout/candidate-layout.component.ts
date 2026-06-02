import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { NotificationCenterComponent } from '../../../shared/components/notification-center/notification-center.component';
import { NotificationService } from '../../../core/services/notification.service';
import { Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-candidate-layout',
  standalone: true,
  imports: [RouterModule, CommonModule, NotificationCenterComponent], 
  templateUrl: './candidate-layout.component.html',
  styleUrls: ['./candidate-layout.component.css']
})
export class CandidateLayoutComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private notificationService = inject(NotificationService);
  private cdr = inject(ChangeDetectorRef);
  private zone = inject(NgZone);

  candidateName = 'Candidat';
  candidateAvatar: string | null = null;
  profileAvatarLoaded = false;
  assetsUrl = environment.assetsUrl;
  
  // 🚀 Variable réactive liée au *ngIf du HTML pour afficher la popup
  selectedNotifData: any = null; 
  private notifSub: Subscription | null = null;

  ngOnInit() {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      this.candidateName = storedName;
    }

    const cachedAvatar = localStorage.getItem('candidate_avatar');
    if (cachedAvatar) {
      this.candidateAvatar = cachedAvatar;
      this.profileAvatarLoaded = true;
    }
    
    // Charge les informations de profil (incluant l'avatar)
    this.loadProfileSidebar();

    this.notifSub = this.notificationService.openApplication$.subscribe((data: any) => {
      if (!data) {
        this.zone.run(() => {
          this.selectedNotifData = null;
          this.cdr.markForCheck();
          this.cdr.detectChanges();
        });
        return;
      }

      console.log("📥 Layout Candidat - Données relationnelles reçues de MySQL :", data);
      
      // Force l'affichage dans la zone Angular et mappe explicitement les données dynamiques reçues
      this.zone.run(() => {
        this.selectedNotifData = {
          company_name: data.company_name || data.name || 'Société Partenaire',
          job_title: data.job_title || 'Poste sélectionné',
          email: data.email || 'Non renseigné',
          phone: data.phone || 'Non renseigné',
          address: data.address || 'Non spécifiée',
          avatar_logo: data.avatar_logo || null,
          status: data.status || "En cours d'étude",
          message: data.message || ''
        };
        this.cdr.markForCheck();
        this.cdr.detectChanges(); // Réveille l'interface pour faire jaillir la popup !
      });
    });
  }

  get candidateInitials(): string {
    return this.candidateName
      .split(' ')
      .map((part) => part.trim()[0])
      .filter(Boolean)
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'C';
  }

  get isCandidateJobSearchPage(): boolean {
    return this.router.url.includes('/candidate/job-search');
  }

  // 📡 Récupère l'avatar actuel pour la sidebar
  loadProfileSidebar() {
    const token = localStorage.getItem('token');
    fetch(`${environment.apiUrl}/candidate/profile/details`, {
      method: 'GET',
      headers: { 'Authorization': token ? `Bearer ${token}` : '' }
    })
    .then(res => res.ok ? res.json() : null)
    .then(data => {
      if (data && data.avatar_logo) {
        // Nettoyage du chemin si nécessaire (similaire à profile-settings)
        const cleanFilename = data.avatar_logo.replace('/logos/', '').replace('uploads/logos/', '');
        this.candidateAvatar = cleanFilename;
        localStorage.setItem('candidate_avatar', cleanFilename);
      } else {
        this.candidateAvatar = null;
        localStorage.removeItem('candidate_avatar');
      }
      this.profileAvatarLoaded = true;
      this.cdr.detectChanges();
    })
    .catch(() => {
      this.profileAvatarLoaded = true;
      this.cdr.detectChanges();
    });
  }

  // ❌ Méthode de fermeture liée au bouton "Fermer" et à la croix (X)
  closeModal() {
    this.zone.run(() => {
      this.selectedNotifData = null;
      this.notificationService.clearTrigger(); // Vide la mémoire du service partagé
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    // Désinscription impérative pour éviter les écoutes fantômes en mémoire
    if (this.notifSub) {
      this.notifSub.unsubscribe();
    }
    this.notificationService.clearTrigger();
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    localStorage.removeItem('is_verified_company');
    this.router.navigate(['/login']);
  }
}
