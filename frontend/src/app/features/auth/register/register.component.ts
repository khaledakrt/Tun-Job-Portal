import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // 🚀 1. AJOUT DE RouterLink ICI
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink], // 🚀 2. AJOUT DE RouterLink DANS LES IMPORTS
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private authService = inject(AuthService);

  user = { name: '', email: '', role: 'candidate', password: '' };
  
  showSuccessMessage = false;
  errorMessage = '';
  countdown = 3;

  onSubmit(event: Event) {
    event.preventDefault();

    this.errorMessage = '';
    this.showSuccessMessage = false;

    const name = this.user.name?.trim();
    const email = this.user.email?.trim();
    const password = this.user.password;

    if (!name || !email || !password) {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires.';
      this.cdr.detectChanges();
      return;
    }

    if (name.length < 2) {
      this.errorMessage = 'Le nom doit contenir au moins 2 caractères.';
      this.cdr.detectChanges();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.errorMessage = 'Adresse e-mail invalide.';
      this.cdr.detectChanges();
      return;
    }

    if (password.length < 8) {
      this.errorMessage = 'Le mot de passe doit contenir au moins 8 caractères.';
      this.cdr.detectChanges();
      return;
    }

    this.authService
      .register({
        name,
        email,
        password,
        role: this.user.role as 'candidate' | 'recruiter',
      })
      .subscribe({
      next: () => {
        this.showSuccessMessage = true;
        this.cdr.detectChanges();
        const interval = setInterval(() => {
          this.countdown--;
          this.cdr.detectChanges();
          if (this.countdown === 0) {
            clearInterval(interval);
            this.router.navigate(['/login']);
          }
        }, 1000);
      },
      error: (err: any) => {
        this.errorMessage = AuthService.formatHttpError(
          err,
          "Impossible de s'inscrire."
        );
        this.cdr.detectChanges();
      },
    });
  }

  goToLogin() {
    this.router.navigate(['/login']); // 🟢 CORRECTION : Redirection manuelle vers /login au clic sur le lien
  }
}
