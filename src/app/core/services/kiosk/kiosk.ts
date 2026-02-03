import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { GlobalConstant } from '../../constants/global.constant';

@Injectable({
  providedIn: 'root',
})
export class KioskService {
  
  // http = inject(HttpClient);
  
  isKioskActive(){
    // return this.http.get(environment.API_URL + GlobalConstant.API_END_POINTS.KIOSK.CHECK_KIOSK_ACTIVE)
    return true;
  }
  

}
