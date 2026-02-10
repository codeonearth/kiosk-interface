import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElectricityBoard } from '../../../models/electricity-board.model';
import { environment } from '../../../../environments/environment.development';
import { GlobalConstant } from '../../constants/global.constant';

@Injectable({
  providedIn: 'root'
})
export class ElectricityService {



  constructor(private http: HttpClient) {}

  // getStates(): Observable<any> {
  //   return this.http.get<any>(environment.API_URL + "/electricity/" +  GlobalConstant.API_END_POINTS.KIOSK_ELECTRICITY.GET_STATES);

  // }
  getStates(): Observable<string[]> {
  return this.http.get<string[]>(
    environment.API_URL + "electricity/" +
    GlobalConstant.API_END_POINTS.KIOSK_ELECTRICITY.GET_STATES
  );
}

getBoardsByState(state: string): Observable<any[]> {
  return this.http.get<any[]>(
    environment.API_URL + "electricity/" +
    GlobalConstant.API_END_POINTS.KIOSK_ELECTRICITY.GET_BOARDS_BY_STATE,
    {
      params: { state: state }
    }
  );
}
}