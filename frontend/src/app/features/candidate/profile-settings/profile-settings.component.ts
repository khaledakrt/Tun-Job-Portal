import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-settings.component.html',
  styles: [`
    .profile-container-compact { max-width: 100% !important; margin: 0 auto; padding: 0 20px !important; font-family: inherit; box-sizing: border-box; }
    .card-header-flex-compact { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
    .card-header-left h3 { margin: 0; color: #0f172a; font-size: 18px; font-weight: 700; display: flex; align-items: center; gap: 8px; }

    .profile-split-layout { display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; align-items: start; width: 100%; }
    .profile-panel-card { background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; padding: 26px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); box-sizing: border-box; }
    
    .panel-inner-title { font-size: 14px; font-weight: 700; color: #0f172a; text-align: left; margin-bottom: 18px; display: flex; align-items: center; gap: 8px; }
    .panel-inner-title i { color: #0ea5e9; }

    .logo-section-compact { display: flex; align-items: center; gap: 16px; background: #f8fafc; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; border: 1px solid #f1f5f9; }
    .logo-preview-compact { width: 52px; height: 52px; border-radius: 50%; border: 1px solid #cbd5e1; background: #ffffff; display: flex; justify-content: center; align-items: center; overflow: hidden; }
    .logo-preview-compact img { width: 100%; height: 100%; object-fit: cover; }
    .btn-secondary-upload-compact { background: #ffffff; border: 1px solid #cbd5e1; color: #334155; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; }
    .btn-secondary-upload-compact:disabled { opacity: 0.5; cursor: not-allowed; background: #f1f5f9; }

    .compact-form-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
    .form-group-compact { display: flex; flex-direction: column; gap: 6px; }
    .form-group-compact label { font-size: 11px; font-weight: 700; color: #64748b; text-align: left; text-transform: uppercase; letter-spacing: 0.3px; }
    .form-group-compact input { width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13.5px; box-sizing: border-box; color: #1e293b; background: #ffffff; }

    .static-text-compact { background: #f8fafc; padding: 10px 14px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 13.5px; font-weight: 500; color: #0f172a; text-align: left; min-height: 41px; box-sizing: border-box; display: flex; align-items: center; }
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

  profile = { name: '', phone: '', email: '', address: '' };
  backupProfile = { name: '', phone: '', email: '', address: '' };
  logoPreviewUrl: string | null = null;
  selectedFile: File | null = null;
  successMessage = '';
  
  isEditMode = false;
  isPasswordEditMode = false;

  passwordData = { currentPassword: '', newPassword: '', confirmPassword: '' };
  passwordSuccessMessage = '';
  passwordErrorMessage = '';

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

  togglePasswordEditMode(mode: boolean) {
    this.isPasswordEditMode = mode;
    if (!mode) {
      this.passwordData = { currentPassword: '', newPassword: '', confirmPassword: '' };
    }
    this.cdr.detectChanges();
  }

  loadCurrentProfile() {
    const targetUrl = 'http://localhost:3000/api/candidate/profile/details'; // Route de votre candidat
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
        this.profile.name = data.name || localStorage.getItem('name') || '';
        this.profile.phone = data.phone || '';
        this.profile.email = data.email || '';
        this.profile.address = data.address || '';
        
        // 🚀 ALIGNEMENT STRICT SUR LE MODÈLE RECRUTEUR
        if (data.avatar_logo) {
          // Sécurité : Extrait uniquement le nom du fichier physique
          const cleanFilename = data.avatar_logo.replace('/logos/', '').replace('uploads/logos/', '');
          
          // Recomposition vers le dossier exposé par votre Express
          this.logoPreviewUrl = `http://localhost:3000/logos/${cleanFilename}`;
        }
        this.cdr.detectChanges();
      }
    })
    .catch(() => {
      this.profile.name = localStorage.getItem('name') || '';
      this.cdr.detectChanges();
    });
  }



  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      
      // Prévisualisation graphique locale immédiate
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreviewUrl = reader.result as string;
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);

      // SAUVEGARDE DIRECTE ET SÉCURISÉE DE L'AVATAR
      const targetUrl = 'http://localhost:3000/api/candidate/profile/update-avatar';
      const token = localStorage.getItem('token');
      
      const formData = new FormData();
      
      // 🟢 CORRECTION ABSOLUE : On utilise la clé 'logo' pour que Multer range 
      // le fichier dans uploads/logos/ et le nomme 'logo-xxxx' (AdBlock ne bloquera plus !)
      formData.append('logo', file, file.name);

      fetch(targetUrl, {
        method: 'POST',
        headers: { 
          'Authorization': token ? `Bearer ${token}` : '' 
        },
        body: formData
      })
      .then(async res => {
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.message || "Échec d'envoi de la photo.");
        }
        return res.json();
      })
      .then(data => {
        this.successMessage = "Votre photo de profil a été mise à jour !";
        
        if (data && data.filename) {
          this.logoPreviewUrl = `http://localhost:3000/logos/${data.filename}`;
        }

        this.cdr.detectChanges();
        setTimeout(() => { this.successMessage = ''; this.cdr.detectChanges(); }, 3000);
      })
      .catch(err => {
        console.error("❌ Erreur Upload Frontend :", err);
        alert(err.message);
      });
    }
  }


  onSaveProfile(event: Event) {
    event.preventDefault();

    const targetUrl = 'http://localhost:3000/api/candidate/profile/update';
    const token = localStorage.getItem('token');

    fetch(targetUrl, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '' 
      },
      body: JSON.stringify({
        name: this.profile.name,
        phone: this.profile.phone,
        address: this.profile.address
      })
    })
    .then(async res => {
      if (!res.ok) throw new Error("Impossible de sauvegarder votre profil.");
      return res.json();
    })
    .then(resData => {
      this.successMessage = resData.message || "Les informations de votre profil ont été mises à jour.";
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

    const targetUrl = 'http://localhost:3000/api/candidate/profile/change-password';
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
      this.isPasswordEditMode = false;
      this.cdr.detectChanges();

      setTimeout(() => { this.passwordSuccessMessage = ''; this.cdr.detectChanges(); }, 4000);
    })
    .catch(err => {
      this.passwordErrorMessage = err.message;
      this.cdr.detectChanges();
    });
  }
}
