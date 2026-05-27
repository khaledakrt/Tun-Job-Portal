import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-settings.component.html',
  styles: [`
    .profile-container-compact { max-width: 100% !important; margin: 0 auto; padding: 0 20px !important; font-family: inherit; box-sizing: border-box; }
    .card-header-flex-compact { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
    .card-header-left h3 { margin: 0; color: #0f172a; font-size: 18px; font-weight: 700; display: flex; align-items: center; gap: 8px; }

    .profile-split-layout { display: grid; grid-template-columns: 1.5fr 1fr; gap: 24px; align-items: start; width: 100%; }
    .profile-panel-card { background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 26px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); box-sizing: border-box; }
    
    .panel-inner-title { font-size: 14px; font-weight: 700; color: #0f172a; text-align: left; margin-bottom: 18px; display: flex; align-items: center; gap: 8px; }
    .panel-inner-title i { color: #0ea5e9; }

    .logo-section-compact { display: flex; align-items: center; gap: 16px; background: #f8fafc; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; border: 1px solid #f1f5f9; }
    .logo-preview-compact { width: 52px; height: 52px; border-radius: 6px; border: 1px solid #cbd5e1; background: #ffffff; display: flex; justify-content: center; align-items: center; overflow: hidden; }
    .logo-preview-compact img { width: 100%; height: 100%; object-fit: cover; }
    .btn-secondary-upload-compact { background: #ffffff; border: 1px solid #cbd5e1; color: #334155; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; }
    .btn-secondary-upload-compact:disabled { opacity: 0.5; cursor: not-allowed; background: #f1f5f9; }

    .compact-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .compact-form-grid.vertical-stack { grid-template-columns: 1fr; gap: 16px; }
    
    .form-group-compact { display: flex; flex-direction: column; gap: 6px; }
    .form-group-compact.span-all { grid-column: span 2; }
    .form-group-compact label { font-size: 11px; font-weight: 700; color: #64748b; text-align: left; text-transform: uppercase; letter-spacing: 0.3px; }
    
    .form-group-compact input, .form-group-compact textarea { width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13.5px; box-sizing: border-box; color: #1e293b; background: #ffffff; }

    .static-text-compact { background: #f8fafc; padding: 10px 14px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 13.5px; font-weight: 500; color: #0f172a; text-align: left; min-height: 41px; box-sizing: border-box; display: flex; align-items: center; }
    .static-text-compact.textarea-view-compact { min-height: 85px; max-height: 85px; overflow-y: auto; line-height: 1.5; display: block; white-space: pre-line; }
    .text-muted-dots { color: #94a3b8 !important; letter-spacing: 3px; font-weight: bold; background-color: #fafbfc; }

    .form-actions-compact { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; padding-top: 15px; border-top: 1px solid #f1f5f9; }
    .btn-cancel-compact { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; padding: 8px 16px; font-size: 13px; font-weight: 600; border-radius: 6px; cursor: pointer; }
    
    .btn-save-compact { background: #0ea5e9; color: white; border: none; padding: 8px 20px; font-size: 13px; font-weight: 600; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; }
    .btn-save-compact.btn-dark-theme { background: #0f172a !important; color: #ffffff !important; }
    .btn-save-compact.btn-dark-theme:hover { background: #1e293b !important; }

    .alert-box-compact { padding: 10px; border-radius: 6px; margin-bottom: 14px; font-size: 13px; text-align: center; font-weight: 600; }
    .alert-success { background-color: #e6f4ea; color: #137333; border: 1px solid #ceead6; }
    .alert-danger { background-color: #fef2f2; color: #991b1b; border: 1px solid #fee2e2; }
  `]
})
export class ProfileSettingsComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);

  profile = { company_name: '', phone: '', email: '', address: '', company_bio: '' };
  backupProfile = { company_name: '', phone: '', email: '', address: '', company_bio: '' };
  logoPreviewUrl: string | null = null;
  selectedFile: File | null = null;
  successMessage = '';
  
  isEditMode = false; // Controle de gauche (Profil)
  isPasswordEditMode = false; // 🚀 NOUVEAU : Controle de droite (Mot de passe)

  passwordData = { currentPassword: '', newPassword: '', confirmPassword: '' };
  passwordSuccessMessage = '';
  passwordErrorMessage = '';

  assetsUrl = environment.assetsUrl;

  ngOnInit() {
    this.loadCurrentProfile();
  }

  toggleEditMode(mode: boolean) {
    this.isEditMode = mode;
    if (mode) {
      this.backupProfile = { ...this.profile };
    } else {
      this.profile = { ...this.backupProfile };
    }
    this.cdr.detectChanges();
  }

  // 🚀 NOUVELLE BASCULE POUR LE MOT DE PASSE INDÉPENDANT
  togglePasswordEditMode(mode: boolean) {
    this.isPasswordEditMode = mode;
    if (!mode) {
      // Si on annule, on vide la saisie
      this.passwordData = { currentPassword: '', newPassword: '', confirmPassword: '' };
    }
    this.cdr.detectChanges();
  }

    loadCurrentProfile() {
    const targetUrl = `${environment.apiUrl}/recruiter/profile/details`;
    const token = localStorage.getItem('token');

    fetch(targetUrl, {
      method: 'GET',
      headers: { 'Authorization': token ? `Bearer ${token}` : '' }
    })
    .then(async res => {
      if (res.ok) return res.json();
      throw new Error();
    })
    .then(data => {
      if (data) {
        this.profile.company_name = data.company_name || localStorage.getItem('name') || '';
        this.profile.phone = data.phone || '';
        this.profile.email = data.email || '';
        this.profile.address = data.address || '';
        this.profile.company_bio = data.company_bio || '';
        
        // 🚀 VÉRIFICATION ET ALIGNEMENT DU LOGO
        if (data.company_logo) {
          // Sécurité : Si l'ancienne chaîne contient déjà '/logos/', on extrait uniquement le nom du fichier
          const cleanFilename = data.company_logo.replace('/logos/', '');
          
          // 🌟 Recomposition propre vers le dossier exposé par votre serveur Express
          this.logoPreviewUrl = `${this.assetsUrl}/logos/${cleanFilename}`;
        }
        this.cdr.detectChanges();
      }
    })
    .catch(() => {
      this.profile.company_name = localStorage.getItem('name') || '';
      this.cdr.detectChanges();
    });
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreviewUrl = reader.result as string;
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    }
  }

  onSaveProfile(event: Event) {
    event.preventDefault();

    const targetUrl = `${environment.apiUrl}/recruiter/profile/update`;
    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('company_name', this.profile.company_name);
    formData.append('phone', this.profile.phone);
    formData.append('email', this.profile.email);
    formData.append('address', this.profile.address);
    formData.append('company_bio', this.profile.company_bio);

    if (this.selectedFile) {
      formData.append('logo', this.selectedFile);
    }

    fetch(targetUrl, {
      method: 'POST',
      headers: { 'Authorization': token ? `Bearer ${token}` : '' },
      body: formData
    })
    .then(async res => {
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Impossible de sauvegarder votre profil.");
      }
      return res.json();
    })
    .then(resData => {
      localStorage.setItem('name', this.profile.company_name);
      this.successMessage = resData.message || "Les informations de votre profil et votre logo ont été mis à jour.";
      this.isEditMode = false;
      this.cdr.detectChanges();

      setTimeout(() => { this.successMessage = ''; this.cdr.detectChanges(); }, 3000);
    })
    .catch(err => alert(err.message));
  }

  onUpdatePassword(event: Event) {
    event.preventDefault();
    this.passwordSuccessMessage = '';
    this.passwordErrorMessage = '';

    if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      this.passwordErrorMessage = "La confirmation ne correspond pas au nouveau mot de passe.";
      return;
    }

    if (this.passwordData.newPassword.length < 6) {
      this.passwordErrorMessage = "Le nouveau mot de passe doit contenir au moins 6 caractères.";
      return;
    }

    const targetUrl = `${environment.apiUrl}/recruiter/profile/change-password`;
    const token = localStorage.getItem('token');

    fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify({
        currentPassword: this.passwordData.currentPassword,
        newPassword: this.passwordData.newPassword
      })
    })
    .then(async res => {
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "Erreur lors du changement de mot de passe.");
      return data;
    })
    .then(data => {
      this.passwordSuccessMessage = data.message || "Votre mot de passe a été modifié avec succès !";
      this.passwordData = { currentPassword: '', newPassword: '', confirmPassword: '' };
      this.isPasswordEditMode = false; // 🚀 Fermeture automatique après succès
      this.cdr.detectChanges();

      setTimeout(() => { this.passwordSuccessMessage = ''; this.cdr.detectChanges(); }, 4000);
    })
    .catch(err => {
      this.passwordErrorMessage = err.message;
      this.cdr.detectChanges();
    });
  }
}
