import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const publicJobSearchGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role')?.toLowerCase();

  if (!token) {
    return true;
  }

  if (role === 'candidate') {
    return router.parseUrl('/candidate/job-search');
  }

  if (role === 'recruiter') {
    return router.parseUrl('/recruiter');
  }

  if (role === 'admin') {
    return router.parseUrl('/admin');
  }

  return true;
};
