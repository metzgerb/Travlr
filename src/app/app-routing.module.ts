import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service'

const routes: Routes = [
  { 
  	path: '', 
  	redirectTo: 'login', 
  	pathMatch: 'full' 
  },
  { 
  	path: 'home', 
  	loadChildren: '../pages/home/home.module#HomePageModule' 
  },
  { 
  	path: 'login',
  	loadChildren: '../pages/login/login.module#LoginPageModule' 
  },
  { 
  	path: 'register', 
  	loadChildren: '../pages/register/register.module#RegisterPageModule' 
  },
  {
  	path: 'home',
  	canActivate: [AuthGuardService],
  	loadChildren: '../pages/home/home.module#HomePageModule', 
  },
  { 
    path: 'profile', 
    canActivate: [AuthGuardService],
    loadChildren: '../pages/profile/profile.module#ProfilePageModule' 
  },
  { path: 'trip', loadChildren: '../pages/trip/trip.module#TripPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
