import { TvItem } from './../../../../models/tvItem.model';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  public userSearch = '';

  constructor(private route: ActivatedRoute, private apiService: ApiHandlerService) { }

  ngOnInit() {
    this.route.queryParams
      .pipe(filter(params => params.query), takeWhile(() => this.keepAlive))
      .subscribe(params => {
        console.log(params);
        this.queryParam = params.query;
        this.onSearch();
      });

  }

  public onSearch() {
    if (this.userSearch !== '') {
      this.apiSearch(encodeURI(this.userSearch.trim()));
    } else if (this.queryParam) {
      this.apiSearch(this.queryParam);
    }
  }

  private apiSearch(query) {
    this.apiService.getTvSearch(query).subscribe(response => {
      console.log(response);
      this.searchEvent.emit(response.response);
    });
  }

  ngOnDestroy(): void {
    this.keepAlive = false;
  }

}
