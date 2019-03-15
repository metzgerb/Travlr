import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  public tripName: string;
  public startDate: Date;
  public endDate: Date;
  public destination: string;
  public people: number;
  public activities: string;
  public minBudget: number;
  public maxBudget: number;
  
  constructor() {}
  
  newTripName(tripNameIn) {
	  this.tripName = tripNameIn;
  }
  
  newTripDates(startDateIn, endDateIn) {
	  this.startDate = startDateIn;
	  this.endDate = endDateIn;
  }
  
  newTripDestination(destinationIn) {
	  this.destination = destinationIn;
  }
  
  newTripPeople(peopleIn) {
	  this.people = peopleIn;
  }
  
  newTripActivities(activitiesIn) {
	  this.activities = activitiesIn;
  }
  
  newTripBudget(minBudgetIn, maxBudgetIn) {
	  this.minBudget = minBudgetIn;
	  this.maxBudget = maxBudgetIn;
  }
  
  logIt() {
	  console.log(this.tripName);
	  console.log(this.startDate);
	  console.log(this.endDate);
	  console.log(this.destination);
	  console.log(this.people);
	  console.log(this.activities);
	  console.log(this.minBudget);
	  console.log(this.maxBudget);
  }
}
