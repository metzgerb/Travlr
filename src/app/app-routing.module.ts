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
  { path: 'trip', loadChildren: '../pages/trip/trip.module#TripPageModule' },
  { path: 'new-trip', loadChildren: '../pages/new-trip/new-trip.module#NewTripPageModule' },
  { path: 'trip-dates', loadChildren: '../pages/trip-dates/trip-dates.module#TripDatesPageModule' },
  { path: 'destination', loadChildren: '../pages/destination/destination.module#DestinationPageModule' },
  { path: 'people', loadChildren: '../pages/people/people.module#PeoplePageModule' },
  { path: 'activities', loadChildren: '../pages/activities/activities.module#ActivitiesPageModule' },
  { path: 'budget', loadChildren: '../pages/budget/budget.module#BudgetPageModule' }




 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
