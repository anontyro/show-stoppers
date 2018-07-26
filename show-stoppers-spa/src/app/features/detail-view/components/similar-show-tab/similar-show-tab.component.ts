import { Component, OnInit, Input } from '@angular/core';
import { TvItem } from '../../../../models/tvItem.model';

@Component({
  selector: 'app-similar-show-tab',
  templateUrl: './similar-show-tab.component.html',
  styleUrls: ['./similar-show-tab.component.scss']
})
export class SimilarShowTabComponent implements OnInit {

  @Input()
  public similarShows: Array<TvItem>;
  constructor() { }

  ngOnInit() {
  }

}
