import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { GlobalConstant } from '../../constants/global.constant';
import { Observable } from 'rxjs';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root',
})
export class KioskService {
  
  constructor(private http: HttpClient, private _encryptionService: EncryptionService) {}
  
  
  isKioskActive(ipAddress:any):Observable<boolean> {
    return this.http.get<boolean>(environment.API_URL + GlobalConstant.API_END_POINTS.KIOSK.CHECK_KIOSK_ACTIVE,{
      params:{ encryptedKioskIP: ipAddress }  
    });

  }


  getPageData(pageKey: string, languageCode: string): Observable<any> {
      return this.http.get<any>(environment.API_URL + GlobalConstant.API_END_POINTS.KIOSK.GET_PAGE_DATA,{
      params:{ pageKey: this._encryptionService.encryptData(pageKey), langCode: languageCode }  
    });
  }


  GetLanguages(): Observable<any> {
    return this.http.get<any>(environment.API_URL + GlobalConstant.API_END_POINTS.KIOSK.GET_LANGUAGES);
  }


  verifyUser(phone: string): Observable<any> {
    return this.http.get<any>(environment.API_URL + GlobalConstant.API_END_POINTS.KIOSK.VERIFY_USER, { 
      params: { encryptedData: this._encryptionService.encryptData(phone) } 
    });
   }



}


