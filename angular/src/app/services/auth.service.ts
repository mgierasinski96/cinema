import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    attemptAuth(username: string, password: string): Observable<any> {
        const credentials = {username: username, password: password};
        console.log('attempAuth');
        return this.http.post<any>('http://localhost:8080/token/generate-token', credentials);
    }

}
