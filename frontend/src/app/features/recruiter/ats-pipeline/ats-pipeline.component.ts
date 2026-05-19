import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-ats-pipeline',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './ats-pipeline.component.html',
  styleUrls: ['./ats-pipeline.component.css']
})
export class AtsPipelineComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);

  applicationsList: any[] = []; 
  selectedApplication: any = null; 

  // 🎯 Variable pour stocker le filtre de l'offre d'emploi sélectionnée
  selectedJobTitle: string = 'all';

  ngOnInit() {
    this.fetchApplications();
  }

  fetchApplications() {
    const targetUrl = 'http://localhost:3000/api/recruiter/ats/applications';
    const token = localStorage.getItem('token');

    fetch(targetUrl, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' 
      }
    })
    .then(res => {
      if (!res.ok) throw new Error("Impossible de charger le pipeline ATS.");
      return res.json();
    })
    .then(data => {
      this.applicationsList = data && Array.isArray(data.applications) ? data.applications : [];
      this.cdr.detectChanges();
      console.log("✅ Candidatures chargées :", this.applicationsList);
    })
    .catch(err => console.error("❌ Erreur ATS :", err));
  }


  getFilteredCandidatesCount(jobTitle: string): number {
  return this.applicationsList.filter(app => {
    // 1. Si on cible une offre précise, on vérifie la correspondance
    if (jobTitle !== 'all' && app.job_title !== jobTitle) return false;

    // 2. On s'assure que le candidat appartient bien à l'une des 3 colonnes actives
    if (!app.status) return true;
    const currentStatus = app.status.toLowerCase().trim();
    return currentStatus.includes('nouv') || 
           currentStatus.includes('att') || 
           currentStatus === 'pending' ||
           currentStatus.includes('entre') || 
           currentStatus.includes('tech') ||
           currentStatus.includes('prop') || 
           currentStatus.includes('offr');
  }).length;
}

  /**
   * 🎯 Extrait dynamiquement la liste unique des offres d'emploi pour alimenter le Dropdown
   */
  getUniqueJobTitles(): string[] {
  if (!this.applicationsList) return [];
  
  // 🟢 On ne garde que les offres qui ont au moins un candidat visible dans le Kanban
  const visibleApps = this.applicationsList.filter(app => {
    if (!app.status) return true; // Statut vide = 'Nouveau' (Visible)
    const currentStatus = app.status.toLowerCase().trim();
    return currentStatus.includes('nouv') || 
           currentStatus.includes('att') || 
           currentStatus === 'pending' ||
           currentStatus.includes('entre') || 
           currentStatus.includes('tech') ||
           currentStatus.includes('prop') || 
           currentStatus.includes('offr');
  });

  const titles = visibleApps.map(app => app.job_title).filter(title => !!title);
  return [...new Set(titles)]; // Supprime les doublons de titres
}


  /**
   * 🎯 Intercepte le changement d'offre sélectionnée depuis l'interface utilisateur
   */
  onJobFilterChange(event: any) {
    this.selectedJobTitle = event.target.value;
    this.cdr.detectChanges();
  }

  /**
   * 🚀 Envoie le changement de statut au backend MySQL
   */
  changeCandidateStatus(applicationId: number, newStatus: string) {
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
    .then(async res => {
      if (!res.ok) throw new Error("Échec de la mise à jour du statut.");
      return res.json();
    })
    .then(() => {
      const appIndex = this.applicationsList.findIndex(a => a.id === applicationId);
      if (appIndex !== -1) {
        this.applicationsList[appIndex].status = newStatus;
      }
      this.selectedApplication = null;
      this.cdr.detectChanges();
    })
    .catch(err => {
      console.error("Erreur de mise à jour ATS :", err);
      alert("Impossible de modifier le statut.");
    });
  }

  /**
   * 🚀 FILTRAGE DOUBLE COUCHE : Filtre par offre sélectionnée PUIS par colonne Kanban
   */
  getCandidatesByStatus(statusName: string): any[] {
    return this.applicationsList.filter(app => {
      // Étape A : Filtrage par titre d'offre sélectionné
      if (this.selectedJobTitle !== 'all' && app.job_title !== this.selectedJobTitle) {
        return false;
      }

      // Étape B : Filtrage classique par colonne Kanban
      if (!app.status) return statusName === 'Nouveau';
      
      const currentStatus = app.status.toLowerCase().trim();
      if (statusName === 'Nouveau') return currentStatus.includes('nouv') || currentStatus.includes('att') || currentStatus === 'pending';
      if (statusName === 'Entretien') return currentStatus.includes('entre') || currentStatus.includes('tech');
      if (statusName === 'Proposition') return currentStatus.includes('prop') || currentStatus.includes('offr');
      
      return false;
    });
  }

  onSelectApplication(app: any) {
    this.selectedApplication = { ...app };
    
    if (app && app.cv_summary) {
      this.selectedApplication.cv_summary = app.cv_summary;
    }

    this.cdr.detectChanges();
    console.log("🔍 Consultation du candidat :", this.selectedApplication);
  }

  onCloseDetails() {
    this.selectedApplication = null;
    this.cdr.detectChanges();
  }

    // 🚀 MÉTHODE CORRIGÉE POUR OUVRIR LA PAGE ANGULAR DU CV
  openCandidateCV(candidateId: number) {
    if (!candidateId) return;
    
    // Ouvre la page Angular de visualisation du CV dans un nouvel onglet
    window.open(`/candidate/cv-view/${candidateId}`, '_blank');
  }


}
