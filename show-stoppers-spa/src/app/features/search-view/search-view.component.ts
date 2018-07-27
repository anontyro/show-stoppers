import { TvItem } from './../../models/tvItem.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { filter, takeWhile } from '../../../../node_modules/rxjs/operators';

/**
 * @class Search View
 * Main search view component that contains the overall page structure
 * This page holds a lot of the key data and delages it across the components
 */
@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit, OnDestroy {
  /** Current search results array */
  public currentSearch: Array<TvItem>;
  /** Current page defaults to 1 */
  public currentPage = 1;
  /** total number of page for the search, defaults to 1 */
  public totalPages = 1;
  /** Total results defaults to 0 */
  public totalResults = 0;
  /** the current query used */
  public currentQuery = '';
  /** Stream control to close open subs on finish */
  private keepAlive = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // listen to the route and get the query params
    this.route.queryParams
    .pipe(filter(params => params.query || params.page), takeWhile(() => this.keepAlive))
    .subscribe(params => {
      this.currentQuery = params.query;
    });
  }

  /**
   * Method that listens to the search bar emitter
   * once emitted this will update the required sections and pass the
   * new search results to the search result component
   * @param searchResults full search result object from the API results are in .results
   */
  public onNextSearch(searchResults: any) {
    this.currentSearch = searchResults.results;
    this.currentPage = searchResults.page;
    this.totalPages = searchResults.total_pages;
    this.totalResults = searchResults.total_results;
  }

  /** On destroy remove streams */
  ngOnDestroy(): void {
    this.keepAlive = false;
  }
}
