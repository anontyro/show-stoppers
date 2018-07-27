import { TvItem } from './../../../../models/tvItem.model';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHandlerService } from '../../../../services/api/api-handler.service';
import { filter, takeWhile } from 'rxjs/operators';

/**
 * @class SearchBar
 * Main searchbar element that currently controls most of the search page
 * and emits the results of the search
 * may need to reconsider this component as it seem to do a little too much for
 * what is intended to do
 */
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  /** Event Emitter that will push out the search results in an Array */
  @Output()
  public searchEvent: EventEmitter<Array<TvItem>> = new EventEmitter();
  /** Holds the users search value and will use when search is pressed */
  public userSearch = '';
  /** subscription control that will keep the page subscriptions alive when active */
  private keepAlive = true;
  /** Query param from the url */
  private queryParam: string;
  /** current page */
  private pageSearch = 1;

  constructor(private route: ActivatedRoute, private apiService: ApiHandlerService, private router: Router) { }

  ngOnInit() {
    // gets the query params from the route providing they are query and page
    this.route.queryParams
      .pipe(filter(params => params.query || params.page), takeWhile(() => this.keepAlive))
      .subscribe(params => {
        this.queryParam = params.query;
        if (params.page) {
          this.pageSearch = params.page;
        }
        this.onSearch(this.pageSearch);
      });
  }

  /** On search button press will navigate to this page with the new query this will force a refresh and display the new results */
  public searchBtnPress() {
    if (this.userSearch === '') {
      return;
    }
    this.router.navigate(['/search'], {queryParams: {query: encodeURI(this.userSearch.trim()), page: 1}});
    this.userSearch = '';
  }

  /**
   * After the params have be assigned will check if there is a user search
   * that will take priority but will be URI encoded first
   */
  public onSearch(page: number) {
    if (this.userSearch !== '') {
      this.apiSearch(encodeURI(this.userSearch.trim()));
    } else if (this.queryParam) {
      this.apiSearch(this.queryParam, page);
    }
  }

  /** Private method that will control the search and emit the results */
  private apiSearch(query, page = 1) {
    this.apiService.getTvSearch(query, page).subscribe(response => {
      this.searchEvent.emit(response.response);
    });
  }

  /** subscription control that will destroy open streams */
  ngOnDestroy(): void {
    this.keepAlive = false;
  }

}
