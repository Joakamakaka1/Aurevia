import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthProvider } from 'src/provider/authProvider';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthProvider);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
