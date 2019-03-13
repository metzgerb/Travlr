import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User, UserService } from '../../services/user.service';
import { Trip, TripService } from '../../services/trip.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  trip: Trip = {
    tripName: '',
    startDate: '',
    endDate: '',
    description: '',
    destination: '',
    people: 0,
    activities: '',
    minBudget: 0,
    maxBudget: 0,
  };

  uid: string;

  user: User;
  trips: Trip[];
  
	constructor(
		private auth: AuthService,
    private userService: UserService,
    private tripService: TripService,
    private activatedRoute: ActivatedRoute,
	) {
      this.uid = this.auth.user;

      this.user = { 
        firstname: '',
        lastname: '',
        points: 0,
        email: ''
      }  

      console.log(this.uid);

      this.userService.getUser(this.uid).subscribe(user => {
        this.user = user;
      });

      this.tripService.getTrips().subscribe(trips => {
        this.trips = trips;
      })
  }

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.tripService.getTrip(id).subscribe(trip => {
        this.trip = trip;
      });
    }
  }
 
  ngOnInit() { }

  logout() {
    this.auth.logout();
  }
}
