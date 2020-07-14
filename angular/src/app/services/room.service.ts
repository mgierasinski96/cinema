import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable()
export class RoomService {

  private API_URL_ROOM = 'http://localhost:8080/room';


  constructor(private httpClient: HttpClient) {
  }

  getAllRooms(): Observable<any> {
    return this.httpClient.get<any>(this.API_URL_ROOM);
  }
  addMovieToRoom(newMovieContent): Observable<any> {
    return this.httpClient.post(this.API_URL_ROOM + '/addMovieToRoom', newMovieContent);
  }
}
