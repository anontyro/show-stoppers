import { TvItem } from './../../../../models/tvItem.model';
import { Component, OnInit, Input } from '@angular/core';

/**
 * @class Search Results
 * Displays the search results for the user again using the poster component
 * to display the results
 */
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  /**
   * Requires and array of current items returned in the search
   */
  @Input()
  public currentSearch: Array<TvItem>;

  constructor() { }

  ngOnInit() {
  }

}
