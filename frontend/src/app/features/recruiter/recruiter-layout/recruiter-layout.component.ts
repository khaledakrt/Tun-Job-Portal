import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common'; 
import { NotificationCenterComponent } from '../../../shared/components/notification-center/notification-center.component';
import { NotificationService } from '../../../core/services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recruiter-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NgIf, NotificationCenterComponent], 
  templateUrl: './recruiter-layout.component.html',
  styleUrls: ['./recruiter-layout.component.css'] 
})
export class RecruiterLayoutComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private notificationService = inject(NotificationService);
  private cdr = inject(ChangeDetectorRef);
  private zone = inject(NgZone); 
  
  recruiterName = 'Recruteur';
  selectedDirectCandidate: any = null;
  
  private notifSubscription: Subscription | null = null;

  ngOnInit() {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      this.recruiterName = storedName;
    }

    // 🚀 LIAISON SÉCURISÉE AVEC RÉINITIALISATION DYNAMIQUE DU CANDIDAT
    this.notifSubscription = this.notificationService.openApplication$.subscribe(candidateObject => {
      if (!candidateObject) {
        this.zone.run(() => {
          this.selectedDirectCandidate = null;
          this.cdr.detectChanges();
        });
        return;
      }

      console.log("📥 Layout global - Reçu l'objet pour affichage de la popup :", candidateObject);
      
      this.zone.run(() => {
        // A. On vide d'abord l'ancien profil pour forcer le rafraîchissement d'Angular
        this.selectedDirectCandidate = null;
        this.cdr.detectChanges();

        // B. On injecte immédiatement le nouveau candidat chargé de MySQL
        this.selectedDirectCandidate = candidateObject; 
        this.cdr.detectChanges(); 
      });
    });
  }

  changeCandidateStatus(applicationId: number, newStatus: string) {
    if (!applicationId) return;
    
    const targetUrl = 'http://localhost:3000/api/recruiter/ats/update-status';
    const token = localStorage.getItem('token');

    fetch(targetUrl, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' 
      },
      body: JSON.stringify({ id: applicationId, status: newStatus })
    })
    .then(res => {
      if (!res.ok) throw new Error("Échec de la mise à jour du statut.");
      return res.json();
    })
    .then(() => {
      console.log(`✅ Statut mis à jour avec succès : ${newStatus}`);
      this.closeModal(); 
    })
    .catch(err => console.error("❌ Erreur de traitement du changement de statut :", err));
  }

  openCandidateCV(candidateId: number) {
    if (!candidateId) return;
    window.open(`/candidate/cv-view/${candidateId}`, '_blank');
  }

  // 🚀 ACTION DE FERMETURE : Supprime les données en mémoire du service et du composant
  closeModal() {
    this.zone.run(() => {
      this.selectedDirectCandidate = null;
      this.notificationService.clearTrigger(); // Demande au service d'émettre 'null'
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.notifSubscription) {
      this.notifSubscription.unsubscribe();
    }
    this.notificationService.clearTrigger();
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
