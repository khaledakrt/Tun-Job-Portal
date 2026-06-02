import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'; // Chemin corrigé
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  private http = inject(HttpClient);
  @ViewChild('f') contactForm?: NgForm;
  payload = { name: '', email: '', subject: '', message: '' };
  isSubmitting = false;
  submitted = false;
  error = '';
  successMessage = '';

  onSubmit() {
    // Client-side validation
    if (!this.payload.name || !this.payload.email || !this.payload.message) {
      this.error = "Veuillez remplir le nom, l'email et le message.";
      this.submitted = false;
      return;
    }

    // Strict email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.payload.email)) {
      this.error = "Veuillez fournir une adresse e-mail valide.";
      this.submitted = false;
      return;
    }

    this.isSubmitting = true;
    this.error = '';

    this.http.post(`${environment.apiUrl}/contact`, this.payload).subscribe({
      next: () => {
        this.submitted = true;
        this.successMessage = 'Message envoyé — nous vous répondrons bientôt.';
        this.isSubmitting = false;
        // reset form and payload
        this.contactForm?.resetForm();
        this.payload = { name: '', email: '', subject: '', message: '' };
      },
      error: (err) => {
        this.error = err?.error?.message || "Erreur lors de l'envoi du message.";
        this.isSubmitting = false;
        this.submitted = false;
      },
    });
  }
}
