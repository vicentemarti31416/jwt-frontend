import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateUserDto } from '../model/create-user-dto';
import { JwtTokenDto } from '../model/jwt-token-dto';
import { LoginUserDto } from '../model/login-user-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:8080/auth';

  constructor(
    private httpClient: HttpClient
  ) { }

  public login(loginUserDto: LoginUserDto): Observable<JwtTokenDto> {
    return this.httpClient.post<JwtTokenDto>(this.url + '/login', loginUserDto);
  }

  public createUser(createUserDto: CreateUserDto): Observable<any> {
    return this.httpClient.post<any>(this.url + '/create-user', createUserDto);
  }
}
