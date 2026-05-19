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

    // 🚀 INTERCEPTION DU SIGNAL : Écoute le clic sur la cloche du candidat
    this.notifSub = this.notificationService.openApplication$.subscribe(data => {
      if (!data) {
        this.zone.run(() => {
          this.selectedNotifData = null;
          this.cdr.detectChanges();
        });
        return;
      }

      console.log("📥 Layout Candidat - Données relationnelles reçues de MySQL :", data);
      
      // Force l'affichage dans la zone Angular pour éviter les blocages de rafraîchissement
      this.zone.run(() => {
        this.selectedNotifData = data;
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
