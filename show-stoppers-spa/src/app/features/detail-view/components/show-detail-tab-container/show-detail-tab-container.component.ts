import { takeWhile } from 'rxjs/operators';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Season } from '../../../../models/season.model';
import { TvItem } from '../../../../models/tvItem.model';
import { ApiHandlerService } from '../../../../services/api/api-handler.service';

/**
 * @class Show Detail Tab Container
 * Main container component for the tab section that will hold the season information along with related shows
 * When seasons are switch a loader will be shown to inform the users data is being supplied by the API
 */
@Component({
  selector: 'app-show-detail-tab-container',
  templateUrl: './show-detail-tab-container.component.html',
  styleUrls: ['./show-detail-tab-container.component.scss']
})
export class ShowDetailTabContainerComponent implements OnInit, OnDestroy {

  /** required input of totalSeasons so the component is able to map them out as clickable links */
  @Input()
  public totalSeasons = 1;
  /** required input of the shows unique id from movie database, this is required to get the seasons */
  @Input()
  public showId;
  /** Array containing the seasons */
  @Input()
  public seasonDetail: Array<Season>;
  /** array contaning a list of similar shows */
  @Input()
  public similarShows: Array<TvItem>;
  /** Default for hte currentSeason is set to 1 */
  public currentSeason = 1;
  /** On loading will display the loader */
  public loadingSeason = false;

  private keepAlive = true;

  constructor(private apiService: ApiHandlerService) { }

  ngOnInit() {
  }

  /**
   * If no sessonDetails will just return
   * when seasons details are avaliable it will search the array for that season
   * if it can't be found it will return the default
   */
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

  /**
   * When the user wants to change the season this method will be called
   * this will first check and set the season if it is in hte array if not it will call
   * getSEasonFromApi() with the season argument
   * @param season number of the season
   */
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

  /**
   * API call to get the season change, add it to the array change the current season and
   * set loading to false
   * @param season number of the season
   */
  public getSeasonFromApi(season) {
    this.apiService.getSeasonDetail(this.showId, season)
      .pipe(takeWhile(() => this.keepAlive))
      .subscribe(response => {
        this.seasonDetail.push(response.response);
        this.currentSeason = season;
        this.loadingSeason = false;
      });
  }

  /**
   * Method used to build an array of season values to iterate over to put out the season list
   */
  private getSeasons() {
    if (!this.totalSeasons) {
      return;
    }
    const season = Array(this.totalSeasons)
      .map((x, i) => i + 1);

      return season;
  }

  /**
   * On destroy will prevent subscriptions by terminating them freeing up memory
   */
  ngOnDestroy(): void {
    this.keepAlive = false;
  }

}
