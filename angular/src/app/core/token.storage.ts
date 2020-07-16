import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME = 'username';
const ROLE = 'Role';

@Injectable()
export class TokenStorage {

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME);
    window.sessionStorage.setItem(USERNAME, username);
  }
  public saveRole(role: string) {
    window.sessionStorage.removeItem(ROLE);
    window.sessionStorage.setItem(ROLE, role);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME);
  }
  public getRole(): string {
    return sessionStorage.getItem(ROLE);
  }

  public removeUsername() {
    window.sessionStorage.removeItem(USERNAME);
  }
  public removeRole() {
    window.sessionStorage.removeItem(ROLE);
  }
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public removeToken() {
    window.sessionStorage.removeItem(TOKEN_KEY);
  }

}
