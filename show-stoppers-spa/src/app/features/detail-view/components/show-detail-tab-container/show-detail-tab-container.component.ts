import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../../../../models/season.model';
import { TvItem } from '../../../../models/tvItem.model';

@Component({
  selector: 'app-show-detail-tab-container',
  templateUrl: './show-detail-tab-container.component.html',
  styleUrls: ['./show-detail-tab-container.component.scss']
})
export class ShowDetailTabContainerComponent implements OnInit {

  @Input()
  public seasonDetail: Array<Season>;

  @Input()
  public similarShows: Array<TvItem>;

  constructor() { }

  ngOnInit() {
  }

}
