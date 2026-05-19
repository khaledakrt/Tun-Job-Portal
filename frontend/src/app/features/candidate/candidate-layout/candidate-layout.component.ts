import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { NotificationCenterComponent } from '../../../shared/components/notification-center/notification-center.component';
import { NotificationService } from '../../../core/services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-candidate-layout',
  standalone: true,
  imports: [RouterModule, CommonModule, NotificationCenterComponent], 
  templateUrl: './candidate-layout.component.html',
  styleUrls: ['./candidate-layout.component.css']
})
export class CandidateLayoutComponent implements OnInit, OnDestroy {
  private notificationService = inject(NotificationService);
  private cdr = inject(ChangeDetectorRef);
  private zone = inject(NgZone);

  candidateName = 'Candidat';
  
  // 🚀 Variable réactive liée au *ngIf du HTML pour afficher la popup
  selectedNotifData: any = null; 
  private notifSub: Subscription | null = null;

  ngOnInit() {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      this.candidateName = storedName;
    }

    // 🚀 INTERCEPTION DU SIGNAL UNIFIÉ DU SERVICE DE NOTIFICATIONS
    // Utilisation d'une vérification dynamique sur le flux disponible pour éviter les erreurs de typage
    const modalObservable$ = (this.notificationService as any).candidateModal$ || 
                             (this.notificationService as any).candidatePopup$ || 
                             this.notificationService.openApplication$;

    this.notifSub = modalObservable$.subscribe((data: any) => {
      if (!data) {
        this.zone.run(() => {
          this.selectedNotifData = null;
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
        this.cdr.detectChanges(); // Réveille l'interface pour faire jaillir la popup !
      });
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
    localStorage.clear();
    window.location.href = '/login';
  }
}
