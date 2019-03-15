import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'

@Component({
  selector: 'app-trip-dates',
  templateUrl: './trip-dates.page.html',
  styleUrls: ['./trip-dates.page.scss'],
})
export class TripDatesPage implements OnInit {

  constructor(private mySearch: SearchService) { }

  getTripDates() {
     //get the trip name from form
	 // var startDate = document.getElementById("startDate").value;
	 // var endDate = document.getElementById("endDate").value;
  //    //call service function to set into service variable tripName
  //    this.mySearch.newTripDates(startDate, endDate);
  }
  
  
  ngOnInit() {
  }

}
