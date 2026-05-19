 
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const candidateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return localStorage.getItem('token') && localStorage.getItem('role') === 'candidate' ? true : router.navigate(['/login']);
};
