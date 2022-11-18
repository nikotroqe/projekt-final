import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path: "", redirectTo: "/register", pathMatch: "full"},
  {path:'login', component: LoginFormComponent},
  {path:'register', component: RegisterFormComponent},
  {path:'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginFormComponent, RegisterFormComponent, HomeComponent]