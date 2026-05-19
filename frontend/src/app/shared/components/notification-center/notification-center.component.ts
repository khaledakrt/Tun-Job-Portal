import { Component, OnInit, inject, ChangeDetectorRef, OnDestroy, NgZone } from '@angular/core';
import { CommonModule, NgIf, NgFor, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { NotificationService } from '../../../core/services/notification.service'; 

@Component({
  selector: 'app-notification-center',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, DatePipe],
  templateUrl: './notification-center.component.html',
  styleUrls: ['./notification-center.component.css']
})
export class NotificationCenterComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private notificationService = inject(NotificationService); 
  private zone = inject(NgZone); // 🚀 SÉCURITÉ : Injection de la zone d'exécution Angular

  notificationsList: any[] = [];
  unreadCount: number = 0;
  showNotificationDropdown: boolean = false;
  private eventSource: EventSource | null = null;

  ngOnInit() {
    this.loadNotificationHistory();
    this.startLiveNotifications();
  }

  // 1. 📥 CHARGEMENT DE L'HISTORIQUE DEPUIS LE BACKEND
  loadNotificationHistory() {
    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/api/notifications/history', {
      method: 'GET',
      headers: { 'Authorization': token ? `Bearer ${token}` : '' }
    })
    .then(res => res.ok ? res.json() : { notifications: [] })
    .then(data => {
      this.notificationsList = data.notifications || [];
      this.unreadCount = this.notificationsList.filter(n => !n.is_read || n.is_read === 0).length;
      this.cdr.detectChanges();
    })
    .catch(err => console.error("❌ Erreur chargement historique notifications :", err));
  }

  // 2. 📡 ÉCOUTE DU FLUX SSE EN TEMPS RÉEL
  startLiveNotifications() {
    const token = localStorage.getItem('token');
    if (!token) return;

    this.eventSource = new EventSource(`http://localhost:3000/api/notifications/stream?token=${token}`);

    this.eventSource.onmessage = (event) => {
      try {
        const newNotif = JSON.parse(event.data);
        console.log("🔔 [LIVE NOTIF] Reçu dans le centre de notifications :", newNotif);

        this.notificationsList.unshift(newNotif);
        this.unreadCount++;
        this.cdr.detectChanges();
      } catch (err) {
        console.error("❌ Erreur traitement JSON SSE :", err);
      }
    };

    this.eventSource.onerror = (err) => {
      console.error("⚠️ Connexion SSE interrompue dans le centre de notifications.", err);
    };
  }

  // 3. 🎯 OUVERTURE / FERMETURE DU MENU DEROULANT
  toggleNotifications() {
    this.showNotificationDropdown = !this.showNotificationDropdown;
  }

      // 4. 🚀 ACTION AU CLIC SUR UNE NOTIFICATION (AVEC DISPARITION INSTANTANÉE ET REDIRECTION)
  readNotification(notif: any) {
    const token = localStorage.getItem('token');
    
    // A. Marquage comme lu en BDD
    if (!notif.is_read || notif.is_read === 0) {
      fetch('http://localhost:3000/api/notifications/read', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': token ? `Bearer ${token}` : '' 
        },
        body: JSON.stringify({ id: notif.id })
      })
      .then(res => {
        if (res.ok) {
          // 🚀 ACTION CORRECTIVE : Supprime la notification cliquée du tableau Angular
          this.notificationsList = this.notificationsList.filter(n => n.id !== notif.id);
          
          // Met à jour dynamiquement le badge rouge
          this.unreadCount = this.notificationsList.length;
          
          // Force le rafraîchissement visuel du dropdown
          this.cdr.detectChanges();
        }
      })
      .catch(err => console.error("❌ Erreur mark-as-read:", err));
    }

    this.showNotificationDropdown = false; // Ferme le dropdown de la cloche au clic

    // ==========================================================================
    // 🎛️ COUPLAGE MULTI-RÔLES : REDIRECTION RECUTEUR OU CANDIDAT
    // ==========================================================================
    const msg = notif.message.toLowerCase();

    // 1️⃣ CAS RECUTEUR : Ouverture de la modal sur place pour une nouvelle postulation
    if (msg.includes('postulé')) {
      fetch(`http://localhost:3000/api/notifications/candidate-by-notif/${notif.id}`, {
        method: 'GET',
        headers: { 'Authorization': token ? `Bearer ${token}` : '' }
      })
      .then(res => {
        if (!res.ok) throw new Error("Erreur de rapatriement relationnel SQL.");
        return res.json();
      })
      .then(dynamicData => {
        if (dynamicData) {
          const candidateObject = Array.isArray(dynamicData) ? dynamicData : dynamicData;
          this.zone.run(() => {
            this.notificationService.triggerCandidateModal(candidateObject);
          });
        }
      }) 
      .catch(err => console.error("❌ Impossible de charger les données réelles du candidat :", err));
    }

    // 2️⃣ CAS CANDIDAT : Redirection vers son espace de suivi des candidatures (ATS Candidat)
    else if (msg.includes('accepté') || msg.includes('entretien') || msg.includes('refusé') || msg.includes('statut')) {
      // Navigue vers l'écran de suivi des postulations du candidat
      this.router.navigate(['/candidate/my-applications']); 
    
  } // 🚀 TOUTES LES ACCOLADES SONT PARFAITEMENT ALIGNÉES ET FERMÉES ICI


   
    this.showNotificationDropdown = false; // Ferme le dropdown de la cloche

    // B. 🚀 CHARGEMENT 100% DYNAMIQUE DEPUIS MYSQL AU CLIC
    if (notif.message.toLowerCase().includes('postulé')) {
      fetch(`http://localhost:3000/api/notifications/candidate-by-notif/${notif.id}`, {
        method: 'GET',
        headers: { 'Authorization': token ? `Bearer ${token}` : '' }
      })
      .then(res => {
        if (!res.ok) throw new Error("Erreur de rapatriement relationnel SQL.");
        return res.json();
      })
      .then(dynamicData => {
        if (dynamicData) {
          // Fixation du typage : Extrait la ligne propre [0] si c'est un tableau
          const candidateObject = Array.isArray(dynamicData) ? dynamicData[0] : dynamicData;
          
          console.log("🎯 Objet nettoyé et envoyé au Layout global :", candidateObject);
          
          // 🚀 ENCAPSULATION DANS LA ZONE : Exécute l'envoi dans la zone principale d'Angular
          // afin de forcer de manière synchrone le réveil du *ngIf dans le Layout !
          this.zone.run(() => {
            this.notificationService.triggerCandidateModal(candidateObject);
          });
        }
      }) 
      .catch(err => console.error("❌ Impossible de charger les données réelles du candidat :", err));
    }
  }

  ngOnDestroy() {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }
}
