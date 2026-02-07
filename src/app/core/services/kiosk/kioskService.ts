import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { GlobalConstant } from '../../constants/global.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KioskService {
  
  constructor(private http: HttpClient) {}
  
  
  isKioskActive(ipAddress:any):Observable<boolean> {
    return this.http.get<boolean>(environment.API_URL + GlobalConstant.API_END_POINTS.KIOSK.CHECK_KIOSK_ACTIVE,{
      params:{ encryptedKioskIP: ipAddress }  
    });

  }


  getPageData(pageKey: string): Observable<any> {
      return this.http.get<any>(environment.API_URL + GlobalConstant.API_END_POINTS.KIOSK.GET_PAGE_DATA,{
      params:{ pageKey: pageKey }  
    });
  }

}


