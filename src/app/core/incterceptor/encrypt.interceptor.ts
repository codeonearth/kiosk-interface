import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { EncryptionService } from '../services/kiosk/encryption.service';


function toCamelCaseKeys(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(v => toCamelCaseKeys(v));
  }

  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((result: any, key: string) => {
      const camelKey = key.charAt(0).toLowerCase() + key.slice(1);
      result[camelKey] = toCamelCaseKeys(obj[key]);
      return result;
    }, {});
  }

  return obj;
}

function normalizeNestedArrays(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(normalizeNestedArrays);
  }

  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (
        obj[key] &&
        typeof obj[key] === 'object' &&
        !Array.isArray(obj[key])
      ) {
        if (['items', 'children', 'components'].includes(key)) {
          obj[key] = Object.values(obj[key]);
        }
      }
      obj[key] = normalizeNestedArrays(obj[key]);
    }
  }

  return obj;
}



export const encryptInterceptor: HttpInterceptorFn = (req, next) => {

  const crypto = inject(EncryptionService);

  let modifiedReq = req;

  
  if (
    req.body &&
    typeof req.body === 'object' &&
    !('payload' in req.body) &&
    !(req.body instanceof FormData)
  ) {
    modifiedReq = req.clone({
      body: {
        payload: crypto.encryptData(req.body)
      }
    });
  }

  return next(modifiedReq).pipe(
    map(event => {

   
      if (
        event instanceof HttpResponse &&
        event.body &&
        typeof event.body === 'object' &&
        'payload' in event.body &&
        typeof event.body.payload === 'string'
      ) {
        const decrypted = crypto.decryptData(event.body.payload);
        const normalized = normalizeNestedArrays(toCamelCaseKeys(decrypted));
        return event.clone({ body: normalized });
      }

      return event;
    })
  );
};
