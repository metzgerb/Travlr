import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service'

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage implements OnInit {

  constructor(private mySearch: SearchService) { }

  getTripBudget() {
     //get the trip name from form
	 var minBudget = document.getElementById("minBudget").nodeValue;
	 var maxBudget = document.getElementById("maxBudget").nodeValue;
     //call service function to set into service variable tripName
     this.mySearch.newTripBudget(minBudget, maxBudget);
  }
  
  ngOnInit() {
  }

}
