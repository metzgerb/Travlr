import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'

@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {

  constructor(private mySearch: SearchService) { }

  getTripDestination() {
     //get the trip name from form
	 // var destination = document.getElementById("destination").value;
     //call service function to set into service variable tripName
     // this.mySearch.newTripDestination(destination);
  }
  
  ngOnInit() {
  }

}
