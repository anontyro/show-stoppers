import { TvItem } from './../../../../models/tvItem.model';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHandlerService } from '../../../../services/api/api-handler.service';
import { filter, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {


  @Output()
  public searchEvent: EventEmitter<Array<TvItem>> = new EventEmitter();

  private keepAlive = true;

  private queryParam: string;

  private pageSearch = 1;

  public userSearch = '';

  constructor(private route: ActivatedRoute, private apiService: ApiHandlerService, private router: Router) { }

  ngOnInit() {
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

  public searchBtnPress() {
    if (this.userSearch === '') {
      return;
    }
    this.router.navigate(['/search'], {queryParams: {query: encodeURI(this.userSearch.trim()), page: 1}});
    this.userSearch = '';
  }

  public onSearch(page: number) {
    if (this.userSearch !== '') {
      this.apiSearch(encodeURI(this.userSearch.trim()));
    } else if (this.queryParam) {
      this.apiSearch(this.queryParam, page);
    }
  }

  private apiSearch(query, page = 1) {
    this.apiService.getTvSearch(query, page).subscribe(response => {
      this.searchEvent.emit(response.response);
    });
  }

  ngOnDestroy(): void {
    this.keepAlive = false;
  }

}
