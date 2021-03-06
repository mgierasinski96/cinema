import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable()
export class SeatService {

  private API_URL_SEAT = 'http://localhost:8080/seat/';


  constructor(private httpClient: HttpClient) {
  }

  getSeatsForMovieId(id: any): Observable<any> {
    return this.httpClient.get<any>(this.API_URL_SEAT + 'seatsForMovieIdentificator/' + id);

  }
  findSeatById(id: any): Observable<any> {
    return this.httpClient.get<any>(this.API_URL_SEAT + id);

  }

  makeReservation(form: any): Observable<any> {
    return this.httpClient.post<any>(this.API_URL_SEAT + 'reserveSeat', form);

  }


}
