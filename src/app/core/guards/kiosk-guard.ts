import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { KioskService } from '../services/kiosk/kiosk';
import { LayoutService } from '../services/layouts/layout';

export const kioskGuard: CanActivateFn = (route, state) => {
  const kioskService = inject(KioskService);
  const router = inject(Router);
  // Check if kiosk mode is active
  if (kioskService.isKioskActive()) {
    return true;
  }
  
  
  router.navigate(['/kiosk/kiosk_Not_Found']); 
  return false;
};




// Layout
// api encryptiom or decrept











