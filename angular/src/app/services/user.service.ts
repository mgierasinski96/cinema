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
    return this.http.get<any>(this.API_URL_USER + 'getUserByUsername/' + username);
  }
  registerUser(userData): Observable<any> {
    return this.http.post(this.API_URL_USER, userData);
  }
}
