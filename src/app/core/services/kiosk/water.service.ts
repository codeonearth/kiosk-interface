import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { GlobalConstant } from '../../constants/global.constant';

// @Injectable({
//   providedIn: 'root'
// })
// export class WaterService {
//   getServiceByBoard: any;
//   getWaterBoards: any;
//   getServiceByBoards: any;



//   constructor(private http: HttpClient) {}

  
//   getBoards(): Observable<any> {
//   return this.http.get<any>(
//     environment.API_URL + "water/" +
//     GlobalConstant.API_END_POINTS.KIOSK_WATER.GET_BOARDS
//   );
// }


// getserviceByBoards(boards: string): Observable<any[]> {
//   return this.http.get<any[]>(
//     environment.API_URL + "water/" +
//     GlobalConstant.API_END_POINTS.KIOSK_WATER.GET_SERVICE_BY_BOARDS,
//     {
//       params: { board: boards }
//     }
//   );
// }





// }

@Injectable({
  providedIn: 'root'
})
export class WaterService {

  constructor(private http: HttpClient) {}

  getBoards(): Observable<any> {
    return this.http.get<any>(
      environment.API_URL + "water/" +
      GlobalConstant.API_END_POINTS.KIOSK_WATER.GET_BOARDS
    );
  }

  getServiceByBoards(board: string): Observable<any> {
    return this.http.get<any>(
      environment.API_URL + "water/" +
      GlobalConstant.API_END_POINTS.KIOSK_WATER.GET_SERVICE_BY_BOARDS,
      {
        params: { boards: board }
      }
    );
  }
}