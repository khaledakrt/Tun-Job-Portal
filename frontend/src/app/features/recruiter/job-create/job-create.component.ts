import { Component, inject, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common'; // 🚀 Requis pour la gestion dynamique des classes CSS du Toast
import { from } from 'rxjs';

@Component({
  selector: 'app-job-create',
  standalone: true,
  imports: [FormsModule, NgClass], // 🚀 Intégration de NgClass pour le thème vert/rouge
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class JobCreateComponent {
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef); // 🚀 Force l'apparition immédiate de l'alerte verte sur l'écran

  // Structure réclamée par le HTML pour piloter le Toast Premium
  notification = {
    show: false,
    message: '',
    type: 'success' as 'success' | 'error'
  };

  // Données de l'offre tunisienne synchronisées avec le HTML (Mises à jour avec les nouveaux champs)
  job = { 
    title: '', 
    contract_type: 'CDI', 
    location: '', 
    workplace_type: 'Présentiel', 
    salary: '', 
    experience_level: 'Junior (0-2 ans)', 
    missions_desc: '', 
    profile_desc: '', 
    skills_desc: '',     // 🚀 Nouvelle propriété pour les compétences
    languages_desc: '',  // 🚀 Nouvelle propriété pour les langues
    expires_at: '' 
  };

  // Fonction de déclenchement de l'alerte temporisée
  showFlashMessage(message: string, type: 'success' | 'error', callback?: () => void) {
    this.notification = { show: true, message, type };
    this.cdr.detectChanges(); // 🚀 Force le rendu graphique vert/rouge à l'écran

    // Disparition automatique et exécution de la redirection après 3 secondes (3000 ms)
    setTimeout(() => {
      this.notification.show = false;
      this.cdr.detectChanges(); // Force la disparition visuelle
      if (callback) callback(); // Déclenche la redirection vers la table de gestion
    }, 3000);
  }

  // 🌟 EXTRACTION EN TEMPS RÉEL DES COMPÉTENCES (Séparées par des virgules)
  getSkillsArray(): string[] {
    if (!this.job.skills_desc) return [];
    return this.job.skills_desc
      .split(',')
      .map(skill => skill.trim())
      .filter(skill => skill !== '');
  }

  // 🌟 EXTRACTION EN TEMPS RÉEL DES LANGUES (Séparées par des virgules)
  getLanguagesArray(): string[] {
    if (!this.job.languages_desc) return [];
    return this.job.languages_desc
      .split(',')
      .map(lang => lang.trim())
      .filter(lang => lang !== '');
  }

  onPublish(event: Event) {
    event.preventDefault(); // Bloque le rechargement de page indésirable

    // Validation locale obligatoire incluant les nouvelles rubriques requis
    if (!this.job.title || !this.job.location || !this.job.missions_desc || !this.job.profile_desc || !this.job.skills_desc || !this.job.languages_desc) {
      this.showFlashMessage("Veuillez renseigner l'intégralité des champs obligatoires marqués d'un astérisque (*).", 'error');
      return;
    }

    console.log("Transmission directe au serveur :", this.job);

    const targetUrl = 'http://localhost:3000/api/recruiter/jobs/create'; 
    const token = localStorage.getItem('token');

    // Génération de la promesse fetch native
    const promise = fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' // Transmet le Token JWT requis par votre sécurité backend
      },
      body: JSON.stringify(this.job)
    }).then(async res => {
      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        throw new Error(errorBody.message || "Erreur serveur.");
      }
      return res.json();
    });

    // Conversion en Observable pour conserver la structure de souscription
    from(promise).subscribe({
      next: (res: any) => {
        const successMsg = res.message || "Annonce d'emploi diffusée avec succès sur TunJob Portal !";
        
        // 🚀 DÉCLENCHEMENT DE L'ALERTE VERTE PREMIUM SUIVIE DE LA REDIRECTION
        this.showFlashMessage(successMsg, 'success', () => {
          this.router.navigate(['/recruiter/job-manage']); 
        });
      },
      error: (err) => {
        console.error("Échec de l'insertion de l'annonce :", err);
        // Déclenche l'alerte rouge en cas de panne de base de données
        this.showFlashMessage("Impossible de diffuser l'offre. Vérifiez votre connexion ou contactez l'administrateur.", 'error');
      }
    });
  }
}
