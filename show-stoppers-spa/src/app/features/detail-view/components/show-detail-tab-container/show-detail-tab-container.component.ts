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
  public totalSeasons = 1;

  @Input()
  public showId;

  @Input()
  public seasonDetail: Array<Season>;

  @Input()
  public similarShows: Array<TvItem>;

  constructor() { }

  ngOnInit() {
  }

  public getActiveSeason(season = 1) {
    if (!this.seasonDetail) {
      return;
    }
    for (let i = 0; i < this.seasonDetail.length; i++) {
      if (this.seasonDetail[i].season_number === season) {
        return this.seasonDetail[i];
      }
    }
    return this.seasonDetail[0];
  }

  public getSeasons() {
    if (!this.totalSeasons) {
      return;
    }
    const season = Array(this.totalSeasons)
      .map((x, i) => i + 1);

      return season;
  }

}
