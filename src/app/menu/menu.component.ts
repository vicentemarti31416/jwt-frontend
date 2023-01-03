import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isLogged!: boolean;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { 
    this.isLogged = this.tokenService.isLogged();
  }

  public logout(): void {
    this.tokenService.logout();
    window.location.reload();
  }

  public login(): void {
    this.router.navigate(['/login']);
  }


}
