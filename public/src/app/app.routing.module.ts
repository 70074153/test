import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ProfileComponent }      from './components/profile/profile.component';
import { LoginComponent }  from './components/login/login.component';
import { RegisterComponent} from "./components/register/register.component";
import {LogoutbuttonComponent} from "./components/logoutbutton/logoutbutton.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login',     component: LoginComponent },
  { path :'logout',component:LogoutbuttonComponent},
  { path :'register',component:RegisterComponent},
  { path : '**', component : LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
