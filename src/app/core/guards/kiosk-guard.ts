import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { KioskService } from '../services/kiosk/kioskService';
import { from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { IPCaptureService } from '../helpers/IPCapture';
import { EncryptionService } from '../services/kiosk/encryption.service';

export const kioskGuard: CanActivateFn = () => {

  const kioskService = inject(KioskService);
  const ipCapture = inject(IPCaptureService);
  const encryptionService = inject(EncryptionService);
  const router = inject(Router);
 return from(ipCapture.getIPAddress()).pipe(
  switchMap(ipInfo => {
    const encryptedIp = encryptionService.encryptData(ipInfo.ip);

    return kioskService.isKioskActive(encryptedIp).pipe(
      map(isActive =>
        isActive
          ? true
          : router.createUrlTree(['/kiosk/kiosk_Not_Found'])
      )
    );
  }),
  catchError(() =>
    of(router.createUrlTree(['/kiosk/kiosk_Not_Found']))
  )
);

};
