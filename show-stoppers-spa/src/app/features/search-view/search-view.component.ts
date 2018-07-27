import { TvItem } from './../../models/tvItem.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent implements OnInit {

  public currentSearch: Array<TvItem>;

  constructor() { }

  ngOnInit() {
  }
  public onNextSearch(searchResults: Array<TvItem>) {
    this.currentSearch = searchResults;
    console.log(searchResults);
  }

}
