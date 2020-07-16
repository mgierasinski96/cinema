import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  API_URL_USER = 'http://localhost:8080/user/';
  private httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) { }


  getUserByUsername(username: String): Observable<any> {
    return this.http.get<any>(this.API_URL_USER + username);
  }
  registerUser(userData): Observable<any> {
    return this.http.post(this.API_URL_USER + 'register', userData);
  }
  getAllUsers(): Observable<any> {
    return this.http.get(this.API_URL_USER);
  }
  getReservedSeatsForUsername(username: any): Observable<any> {
    return this.http.get<any>(this.API_URL_USER + 'getReservedSeats/' + username);

  }

  removeUser(username: any): Observable<any> {
    return this.http.get<any>(this.API_URL_USER + 'remove/' + username);

  }
}
