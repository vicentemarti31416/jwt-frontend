import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUserDto } from '../model/login-user-dto';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username!: string;
  password!: string;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private toast: ToastrService
  ) {}

  onLogin(): void {
    const loginUserDto = new LoginUserDto(this.username, this.password);
    this.authService.login(loginUserDto).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/home']);
      }, 
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    )
  }

}
