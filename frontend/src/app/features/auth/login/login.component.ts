import { Component, inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  private authService = inject(AuthService);

  credentials = { email: '', password: '' };
  forgotEmail = '';
  resetPasswordData = { password: '', confirmPassword: '' };
  resetToken = '';
  authMode: 'login' | 'forgot' | 'reset' = 'login';
  errorMessage = '';
  successMessage = '';
  isEmailVerified = false; 

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['verified'] === 'true') {
        this.isEmailVerified = true;
      }
      if (params['resetToken']) {
        this.resetToken = params['resetToken'];
        this.authMode = 'reset';
      }
      this.cdr.detectChanges();
    });
  }

  onSubmit(event: Event) {
    event.preventDefault(); 
    this.errorMessage = '';
    this.successMessage = '';
    this.isEmailVerified = false; 

    const email = this.credentials.email?.trim();
    const password = this.credentials.password;

    if (!email || !password) {
      this.errorMessage = 'Veuillez saisir vos identifiants.';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.errorMessage = 'Adresse e-mail invalide.';
      return;
    }

    this.authService.login({ email, password }).subscribe({
      next: (res: any) => {
        if (res.is_verified_company !== undefined) {
          localStorage.setItem('is_verified_company', res.is_verified_company.toString());
        } else {
          localStorage.setItem('is_verified_company', '0');
        }
        this.router.navigate([`/${res.role}`]);
      },
      error: (err: any) => {
        this.errorMessage = AuthService.formatHttpError(
          err,
          'Identifiants ou mot de passe incorrects.'
        );
        this.cdr.detectChanges();
      },
    });
  }

  showForgotPassword() {
    this.authMode = 'forgot';
    this.errorMessage = '';
    this.successMessage = '';
    this.isEmailVerified = false;
    this.forgotEmail = this.credentials.email || '';
  }

  showLogin() {
    this.authMode = 'login';
    this.errorMessage = '';
    this.successMessage = '';
    this.resetPasswordData = { password: '', confirmPassword: '' };
    this.resetToken = '';
    this.router.navigate(['/login']);
  }

  onForgotPassword(event: Event) {
    event.preventDefault();
    this.errorMessage = '';
    this.successMessage = '';

    const email = this.forgotEmail.trim();
    if (!email) {
      this.errorMessage = 'Veuillez saisir votre adresse e-mail.';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.errorMessage = 'Adresse e-mail invalide.';
      return;
    }

    this.authService.forgotPassword(email).subscribe({
      next: (res) => {
        this.successMessage = res.message;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = AuthService.formatHttpError(err, "Impossible d'envoyer l'e-mail de réinitialisation.");
        this.cdr.detectChanges();
      },
    });
  }

  onResetPassword(event: Event) {
    event.preventDefault();
    this.errorMessage = '';
    this.successMessage = '';

    const password = this.resetPasswordData.password;
    const confirmPassword = this.resetPasswordData.confirmPassword;

    if (!password || password.length < 8) {
      this.errorMessage = 'Le nouveau mot de passe doit contenir au moins 8 caractères.';
      return;
    }
    if (password !== confirmPassword) {
      this.errorMessage = 'Les deux mots de passe ne correspondent pas.';
      return;
    }

    this.authService.resetPassword(this.resetToken, password).subscribe({
      next: (res) => {
        this.successMessage = res.message;
        this.authMode = 'login';
        this.resetPasswordData = { password: '', confirmPassword: '' };
        this.router.navigate(['/login']);
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = AuthService.formatHttpError(err, 'Lien de réinitialisation invalide ou expiré.');
        this.cdr.detectChanges();
      },
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
