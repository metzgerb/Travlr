import { Component, OnInit } from '@angular/core';
import { Trip, TripService } from '../../services/trip.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss'],
})
export class TripPage implements OnInit {


	trip: Trip = {
		tripName: '',
		startDate: '',
		endDate: '',
		destination: '',
		description: '',
		people: 0,
		activities: '',
		minBudget: 0,
		maxBudget: 0,
	};	

	constructor(
		private tripService: TripService, 
		private toastCtrl: ToastController,
		private router: Router,
		private activatedRoute: ActivatedRoute,
	) { }

	ngOnInit() {
	}

	ionViewWillEnter() {
		let id = this.activatedRoute.snapshot.paramMap.get('id');
			if (id) {
				this.tripService.getTrip(id).subscribe(trip => {
				this.trip = trip;
			});
		}
	}

	addTrip() {
		this.tripService.addTrip(this.trip).then(() => {
			this.router.navigateByUrl('/home');
		}, err => {
			this.showToast('There was a problem adding your trip :(');
		});
  	}
 
	deleteTrip() {
		this.tripService.deleteTrip(this.trip.id).then(() => {
			this.router.navigateByUrl('/home');
			this.showToast('Trip deleted');
		}, err => {
			this.showToast('There was a problem deleting your trip :(');
		});
	}
 
	updateTrip() {
		this.tripService.updateTrip(this.trip).then(() => {
			this.router.navigateByUrl('/home');
			this.showToast('Trip updated');
		}, err => {
			this.showToast('There was a problem updating your trip :(');
		});
	}

	showToast(msg) {
		this.toastCtrl.create({
			message: msg,
			duration: 2000
		}).then(toast => toast.present());
	}

}
