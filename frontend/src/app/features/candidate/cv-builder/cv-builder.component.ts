import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cv-builder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.css']
})
export class CvBuilderComponent implements OnInit {
  private cdr = inject(ChangeDetectorRef);

  cvData = {
    title: '',
    summary: '',
    skills: '',
    interests: '',
    experiences: [] as any[],
    educations: [] as any[]
  };

  candidateName: string = '';
  avatarUrl: string | null = null;
  candidateContact = { email: '', phone: '', address: '' };
  successMessage: string = '';
  isSaving: boolean = false;

  ngOnInit() {
    this.candidateName = localStorage.getItem('name') || '';
    this.fetchProfileDetails();
    this.fetchCurrentCV();
  }

  fetchProfileDetails() {
    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/api/candidate/profile/details', {
      method: 'GET',
      headers: { 'Authorization': token ? `Bearer ${token}` : '' }
    })
    .then(res => res.ok ? res.json() : null)
    .then(data => {
      if (data) {
        if (!this.candidateName) {
          this.candidateName = (data.firstname && data.lastname) ? `${data.firstname} ${data.lastname}` : 'Candidat';
        }
        this.candidateContact.email = data.email || '';
        this.candidateContact.phone = data.phone || '';
        this.candidateContact.address = data.address || '';
        if (data.avatar_logo) {
          this.avatarUrl = `http://localhost:3000/logos/${data.avatar_logo}`;
        }
        this.cdr.detectChanges();
      }
    }).catch(() => {});
  }

  fetchCurrentCV() {
    const token = localStorage.getItem('token');
    fetch('http://localhost:3000/api/candidate/cv/details', {
      method: 'GET',
      headers: { 'Authorization': token ? `Bearer ${token}` : '' }
    })
    .then(res => res.ok ? res.json() : null)
    .then(data => {
      if (data) {
        this.cvData.title = data.title || '';
        this.cvData.summary = data.summary || '';
        this.cvData.skills = data.skills || '';
        this.cvData.interests = data.interests || '';
        this.cvData.experiences = typeof data.experience === 'string' ? JSON.parse(data.experience) : (data.experience || []);
        this.cvData.educations = typeof data.education === 'string' ? JSON.parse(data.education) : (data.education || []);
        this.cdr.detectChanges();
      }
    }).catch(() => {});
  }

  addExperience() { this.cvData.experiences.push({ job_title: '', company: '', duration: '', description: '' }); this.cdr.detectChanges(); }
  removeExperience(index: number) { this.cvData.experiences.splice(index, 1); this.cdr.detectChanges(); }
  addEducation() { this.cvData.educations.push({ degree: '', school: '', year: '' }); this.cdr.detectChanges(); }
  removeEducation(index: number) { this.cvData.educations.splice(index, 1); this.cdr.detectChanges(); }

  getSkillsArray(): string[] { return this.cvData.skills ? this.cvData.skills.split(',').filter(s => s.trim() !== '') : []; }
  getInterestsArray(): string[] { return this.cvData.interests ? this.cvData.interests.split(',').filter(i => i.trim() !== '') : []; }

  onSaveCV(event: Event) {
    event.preventDefault();
    this.isSaving = true;
    const token = localStorage.getItem('token');
    
    const nameParts = this.candidateName.trim().split(' ');
    const firstname = nameParts || '';
    const lastname = nameParts.slice(1).join(' ') || '';

    const payload = {
      title: this.cvData.title,
      summary: this.cvData.summary,
      skills: this.cvData.skills,
      interests: this.cvData.interests,
      experience: JSON.stringify(this.cvData.experiences),
      education: JSON.stringify(this.cvData.educations),
      firstname: firstname,
      lastname: lastname,
      email: this.candidateContact.email,
      phone: this.candidateContact.phone,
      address: this.candidateContact.address
    };

    fetch('http://localhost:3000/api/candidate/cv/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': token ? `Bearer ${token}` : '' },
      body: JSON.stringify(payload)
    })
    .then(res => res.ok ? res.json() : null)
    .then(() => {
      this.successMessage = "Toutes les modifications de votre profil ont été enregistrées !";
      this.isSaving = false;
      this.cdr.detectChanges();
      setTimeout(() => { this.successMessage = ''; this.cdr.detectChanges(); }, 3000);
    })
    .catch(() => { this.isSaving = false; this.cdr.detectChanges(); });
  }
}
