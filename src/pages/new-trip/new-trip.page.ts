import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.page.html',
  styleUrls: ['./new-trip.page.scss'],
})
export class NewTripPage implements OnInit {

  constructor(private mySearch: SearchService) { }
  
  getTripName() {
     //get the trip name from form
	 var tripName = document.getElementById("tripName").nodeValue;
     //call service function to set into service variable tripName
     this.mySearch.newTripName(tripName);
  }
	  
  

  ngOnInit() {

  }


  
}
