import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-new-trip-results',
  templateUrl: './new-trip-results.page.html',
  styleUrls: ['./new-trip-results.page.scss'],
})
export class NewTripResultsPage implements OnInit {

  constructor(private mySearch: SearchService) { }

  ngOnInit() {
  }

}
