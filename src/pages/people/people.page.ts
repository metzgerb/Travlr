import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  constructor(private mySearch: SearchService) { }
  
  getTripPeople() {
     //get the trip name from form
	 var people = document.getElementById("people").value;
     //call service function to set into service variable tripName
     this.mySearch.newTripPeople(people);
  }

  ngOnInit() {
  }

}
