 
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return localStorage.getItem('token') && localStorage.getItem('role') === 'admin' ? true : router.navigate(['/login']);
};
