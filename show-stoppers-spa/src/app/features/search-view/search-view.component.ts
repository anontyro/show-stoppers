import { TvItem } from './../../models/tvItem.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { filter, takeWhile } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit, OnDestroy {

  public currentSearch: Array<TvItem>;

  constructor(private route: ActivatedRoute) { }

  public currentPage = 1;
  public totalPages = 1;
  public totalResults = 0;

  public currentQuery = '';

  private keepAlive = true;

  ngOnInit() {
    this.route.queryParams
    .pipe(filter(params => params.query || params.page), takeWhile(() => this.keepAlive))
    .subscribe(params => {
      this.currentQuery = params.query;
    });
  }

  public onNextSearch(searchResults: any) {
    this.currentSearch = searchResults.results;
    this.currentPage = searchResults.page;
    this.totalPages = searchResults.total_pages;
    this.totalResults = searchResults.total_results;
    console.log(searchResults);
  }


  ngOnDestroy(): void {
    this.keepAlive = false;
  }
}
