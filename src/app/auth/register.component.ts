import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateUserDto } from '../model/create-user-dto';
import { LoginUserDto } from '../model/login-user-dto';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email!: string;
  username!: string;
  password!: string;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private toast: ToastrService
  ) {}

  public onRegister(): void {
    const createUserDto = new CreateUserDto(this.email, this.username, this.password);
    const loginUserDto = new LoginUserDto(this.username, this.password);
    this.authService.createUser(createUserDto).subscribe(
      data => {
        this.toast.success(data.message, 'Success', { timeOut: 3000, positionClass: 'toast-top-center'});
        this.authService.login(loginUserDto).subscribe(response => this.tokenService.setToken(response.token))
        this.router.navigate(['/']);
      },
      err => {
        this.toast.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center'});
      }
    )
  }

}
