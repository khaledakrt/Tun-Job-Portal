import { Routes } from '@angular/router';
import { adminGuard } from './core/guards/admin.guard';
import { candidateGuard } from './core/guards/candidate.guard';
import { recruiterGuard } from './core/guards/recruiter.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent) },
  
  // ==========================================================================
  // 🌍 ROUTE COMMUNE/PUBLIQUE : Ajoutée ici pour le recruteur (sans guard bloquant)
  // ==========================================================================
  { 
    path: 'candidate/cv-view/:id', 
    loadComponent: () => import('./features/candidate/cv-view/cv-view.component').then(m => m.CvViewComponent) 
  },

  // ==========================================================================
  // 🧭 ESPACE CANDIDAT : CONFIGURATION DES ROUTES ENFANTS INCHANGÉE (Zéro bug candidat)
  // ==========================================================================
  { 
    path: 'candidate', 
    canActivate: [candidateGuard],
    loadComponent: () => import('./features/candidate/candidate-layout/candidate-layout.component').then(m => m.CandidateLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'job-search',
        pathMatch: 'full'
      },
      {
        path: 'job-search',
        loadComponent: () => import('./features/candidate/job-search/job-search.component').then(m => m.JobSearchComponent)
      },
      {
        path: 'applications-list',
        loadComponent: () => import('./features/candidate/applications-list/applications-list.component').then(m => m.ApplicationsListComponent)
      },
      {
        path: 'cv-builder',
        loadComponent: () => import('./features/candidate/cv-builder/cv-builder.component').then(m => m.CvBuilderComponent)
      },
      {
        path: 'cv-view', // 👈 Laissée ici pour que l'accès classique du candidat ne change pas d'un poil
        loadComponent: () => import('./features/candidate/cv-view/cv-view.component').then(m => m.CvViewComponent)
      },
      {
        path: 'profile-settings',
        loadComponent: () => import('./features/candidate/profile-settings/profile-settings.component').then(m => m.ProfileSettingsComponent)
      }
    ]
  },

  // ==========================================================================
  // 💼 ESPACE RECRUTEUR
  // ==========================================================================
  { 
    path: 'recruiter', 
    canActivate: [recruiterGuard],
    loadComponent: () => import('./features/recruiter/recruiter-layout/recruiter-layout.component').then(m => m.RecruiterLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/recruiter/recruiter-overview/recruiter-overview.component').then(m => m.RecruiterOverviewComponent)
      },
      {
        path: 'create-job',
        loadComponent: () => import('./features/recruiter/job-create/job-create.component').then(m => m.JobCreateComponent)
      },
      {
        path: 'job-manage',
        loadComponent: () => import('./features/recruiter/job-manage/job-manage.component').then(m => m.JobManageComponent)
      },
      {
        path: 'profile-settings',
        loadComponent: () => import('./features/recruiter/profile-settings/profile-settings.component').then(m => m.ProfileSettingsComponent)
      },
      {
        path: 'ats-pipeline',
        loadComponent: () => import('./features/recruiter/ats-pipeline/ats-pipeline.component').then(m => m.AtsPipelineComponent)
      }
    ]
  },

    // ==========================================================================
  // 🛡️ ESPACE ADMIN : CONFIGURATION SÉCURISÉE DES ROUTES ENFANTS MAPPED
  // ==========================================================================
  { 
    path: 'admin', 
    canActivate: [adminGuard],
    loadComponent: () => import('./features/admin/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        loadComponent: () => import('./features/admin/admin-overview/admin-overview.component').then(m => m.AdminOverviewComponent)
      },
      {
        path: 'manage-users',
        loadComponent: () => import('./features/admin/manage-users/manage-users.component').then(m => m.ManageUsersComponent)
      },
      {
        path: 'manage-jobs',
        loadComponent: () => import('./features/admin/manage-jobs/manage-jobs.component').then(m => m.ManageJobsComponent)
      }
    ]
  },
  
  { path: '**', redirectTo: 'login' }
]; // 👈 Fermeture finale et propre du tableau des routes d'Angular

