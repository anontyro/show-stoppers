import { takeWhile } from 'rxjs/operators';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Season } from '../../../../models/season.model';
import { TvItem } from '../../../../models/tvItem.model';
import { ApiHandlerService } from '../../../../services/api/api-handler.service';

@Component({
  selector: 'app-show-detail-tab-container',
  templateUrl: './show-detail-tab-container.component.html',
  styleUrls: ['./show-detail-tab-container.component.scss']
})
export class ShowDetailTabContainerComponent implements OnInit, OnDestroy {

  @Input()
  public totalSeasons = 1;

  @Input()
  public showId;

  @Input()
  public seasonDetail: Array<Season>;

  @Input()
  public similarShows: Array<TvItem>;

  public currentSeason = 1;

  private keepAlive = true;

  public loadingSeason = false;

  constructor(private apiService: ApiHandlerService) { }

  ngOnInit() {
  }

  public getActiveSeason() {
    if (!this.seasonDetail) {
      return;
    }
    for (let i = 0; i < this.seasonDetail.length; i++) {
      if (this.seasonDetail[i].season_number === this.currentSeason) {
        return this.seasonDetail[i];
      }
    }
    return this.seasonDetail[0];
  }

  public changeSeason(season) {
    for (let i = 0; i < this.seasonDetail.length; i++) {
      if (this.seasonDetail[i].season_number === season) {
        this.currentSeason = season;
        return this.seasonDetail[i];
      }
    }
    this.loadingSeason = true;
    this.getSeasonFromApi(season);

  }

  public getSeasonFromApi(season) {
    this.apiService.getSeasonDetail(this.showId, season)
      .pipe(takeWhile(() => this.keepAlive))
      .subscribe(response => {
        this.seasonDetail.push(response.response);
        this.currentSeason = season;
        this.loadingSeason = false;
      });
  }

  public getSeasons() {
    if (!this.totalSeasons) {
      return;
    }
    const season = Array(this.totalSeasons)
      .map((x, i) => i + 1);

      return season;
  }

  ngOnDestroy(): void {
    this.keepAlive = false;
  }

}
