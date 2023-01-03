import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate {

  realRole!: string;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRoles = route.data['expectedRoles'];
    this.realRole = this.tokenService.isAdmin()? 'admin': 'user';
    if (!this.tokenService.isLogged() || expectedRoles.indexOf(this.realRole) < 0) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }


  
}
