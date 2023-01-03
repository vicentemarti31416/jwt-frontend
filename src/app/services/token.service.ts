import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public logout(): void {
    localStorage.removeItem(TOKEN_KEY)
  }

  public isLogged(): boolean {
    return this.getToken() != null;
  }

  public isAdmin(): boolean {
    if (!this.isLogged()) return false;
    const token = this.getToken();
    const payload = token!.split(".")[1];
    const payloadDecoded = window.atob(payload)
    const values = JSON.parse(payloadDecoded);
    const roles = values.roles;
    if (roles.indexOf('ROLE_ADMIN') < 0) return false;
    else {
      return true
    }
  }

}
