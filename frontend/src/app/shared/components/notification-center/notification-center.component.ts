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

   // 4. 🚀 ACTION AU CLIC SUR UNE NOTIFICATION (RÉSOLUTION DÉCONEXION CANDIDAT & DOUBLONS)
  readNotification(notif: any) {
    const token = localStorage.getItem('token');
    
    // A. Marquage comme lu en BDD si la notification n'est pas déjà lue
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
          // Supprime la notification cliquée du tableau Angular pour la faire disparaître
          this.notificationsList = this.notificationsList.filter(n => n.id !== notif.id);
          this.unreadCount = this.notificationsList.length;
          this.cdr.detectChanges();
        }
      })
      .catch(err => console.error("❌ Erreur mark-as-read:", err));
    }

    this.showNotificationDropdown = false; // Ferme le dropdown de la cloche au clic

    // ==========================================================================
    // 🎛️ COUPLAGE ET PASSERELLE MULTI-RÔLES SÉCURISÉE (SANS DOUBLONS)
    // ==========================================================================
    const userRole = localStorage.getItem('role')?.toLowerCase() || '';
    const msg = notif.message.toLowerCase();

    // 💼 1️⃣ CAS RECRUTEUR : Ouverture de la modal sur place via la route d'origine
    if (userRole === 'recruiter' && msg.includes('postulé')) {
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
          console.log("🎯 Objet nettoyé et envoyé au Layout global Recruteur :", candidateObject);
          
          this.zone.run(() => {
            this.notificationService.triggerCandidateModal(candidateObject);
          });
        }
      }) 
      .catch(err => console.error("❌ Impossible de charger les données réelles du candidat :", err));
    }

    // 👤 2️⃣ CAS CANDIDAT : Appelle la toute nouvelle route dédiée "recruiter-by-notif"
    else if (userRole === 'candidate' || userRole === 'seeker' || msg.includes('statut') || msg.includes('entretien') || msg.includes('accepté')) {
      
      // Extraction dynamique du statut pour adapter l'affichage du badge candidat
      let currentStatus = "En cours d'étude";
      if (msg.includes('entretien')) currentStatus = "Entretien";
      if (msg.includes('accepté') || msg.includes('proposition')) currentStatus = "Proposition";
      if (msg.includes('refusé') || msg.includes('rejete')) currentStatus = "Refusé";

      fetch(`http://localhost:3000/api/notifications/recruiter-by-notif/${notif.id}`, {
        method: 'GET',
        headers: { 'Authorization': token ? `Bearer ${token}` : '' }
      })
      .then(res => {
        if (!res.ok) throw new Error("Erreur de rapatriement de l'entreprise SQL.");
        return res.json();
      })
      .then(serverData => {
        if (serverData) {
          const recruiterObject = Array.isArray(serverData) ? serverData : serverData;
          
          // Reconstitution dynamique complète à partir des données de MySQL
          const candidatePayload = {
            company_name: recruiterObject.company_name,
            job_title: recruiterObject.job_title,
            email: recruiterObject.email,
            phone: recruiterObject.phone,
            address: recruiterObject.address,
            avatar_logo: recruiterObject.avatar_logo,
            status: currentStatus,
            message: notif.message
          };

          console.log("🎯 [CANDIDAT] Envoi des données réelles du recruteur au Layout :", candidatePayload);
          
          this.zone.run(() => {
            this.notificationService.triggerCandidateModal(candidatePayload);
          });
        }
      })
      .catch(err => console.error("❌ Impossible de charger les données réelles de la société :", err));
    }
  }

  ngOnDestroy() {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }
}
