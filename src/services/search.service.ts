import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  
  private tripName: string;
  private startDate: Date;
  private endDate: Date;
  private destination: string;
  private people: number;
  private activities: string;
  private minBudget: number;
  private maxBudget: number;
  
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
