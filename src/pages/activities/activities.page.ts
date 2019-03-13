import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  constructor(private mySearch: SearchService) { }

  getTripActivities() {
     //get the trip name from form
	 var activities = document.getElementById("activities").nodeValue;
     //call service function to set into service variable tripName
     this.mySearch.newTripActivities(activities);
  }
  
  ngOnInit() {
  }

}
