import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { GlobalConstant } from '../../constants/global.constant';

@Injectable({
  providedIn: 'root'
})
export class GasService {



  constructor(private http: HttpClient) {}

  // getStates(): Observable<any> {
  //   return this.http.get<any>(environment.API_URL + "/electricity/" +  GlobalConstant.API_END_POINTS.KIOSK_ELECTRICITY.GET_STATES);

  // }
  getProviders(): Observable<string[]> {
  return this.http.get<string[]>(
    environment.API_URL + "gas/" +
    GlobalConstant.API_END_POINTS.KIOSK_GAS.GET_PROVIDERS
  );
}

getDistrictByProvider(provider: string): Observable<any[]> {
  return this.http.get<any[]>(
    environment.API_URL + "gas/" +
    GlobalConstant.API_END_POINTS.KIOSK_GAS.GET_District_BY_PROVIDER,
    {
      params: { provider: provider }
    }
  );
}
}