import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToggleGuard } from '../services/toggle-guard';

export const editGuard: CanActivateFn = () => {
  const toggleGuard = inject(ToggleGuard);
  const router = inject(Router);

  if (toggleGuard.guardEnabled()) {
    return router.parseUrl('/pokemon')
  }

  return true;
}
