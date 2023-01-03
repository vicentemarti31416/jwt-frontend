import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { HomeGuard } from './guard/home.guard';
import { LoginGuard } from './guard/login.guard';
import { ProductGuard } from './guard/product.guard';
import { CreateComponent } from './product/create.component';
import { DetailComponent } from './product/detail.component';
import { ListComponent } from './product/list.component';
import { UpdateComponent } from './product/update.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent, canActivate: [ProductGuard, HomeGuard], data: {expectedRoles: ['admin', 'user']} },
  { path: 'create', component: CreateComponent, canActivate: [ProductGuard, HomeGuard], data: {expectedRoles: ['admin']} },
  { path: 'update', component: UpdateComponent, canActivate: [ProductGuard, HomeGuard], data: {expectedRoles: ['admin']} },
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
