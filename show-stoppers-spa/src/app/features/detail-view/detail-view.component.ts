import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ApiHandlerService } from '../../services/api/api-handler.service';
import { takeWhile } from '../../../../node_modules/rxjs/operators';
import { TvItem } from '../../models/tvItem.model';
import { Season } from '../../models/season.model';

/**
 * @class Detail View
 * This is the main component that holds together the detail view (show/:id)
 * structure with the left and main being the main components here
 * a lot of the api requires are routed from here downwards
 */
@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit, OnDestroy {
  /** unique showId obtained from the URL */
  private showId: number;
  /** keepAlive is to control the subscriptions */
  private keepAlive = true;
  /** TvItem object for hte current ShowId used for all the information */
  public showDetail: TvItem;
  /** all season requests end up here in an array */
  public seasonDetail: Array<Season> = [];
  /** request made against the showID to find similar shows */
  public similarShows: Array<TvItem>;
  /** onload display the loader */
  public pageLoading = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiHandlerService
  ) { }

  ngOnInit() {
    // route listner to check for changes and get teh showID
    this.route.params
     .pipe(takeWhile(() => this.keepAlive))
      .subscribe(params => {
      this.showId = params['id']; // get show id
      this.buildPage(); // build the page with this show id
    });

  }

  /**
   * Main working method for this page as it will take the showId
   * and call the three endpoints: showDetails, SeasonDetail and Similar Shows
   * this will allow the page to be created correctly
   * page loading will be false once the basic data is loaded as to prevent
   * the user from too longer wait
   */
  private buildPage() {
    this.pageLoading = true;
    this.apiService.getTvShowDetails(this.showId)
      .pipe(takeWhile(() => this.keepAlive))
      .subscribe(response => {
        this.showDetail = response.response;
        this.pageLoading = false;
      });

    this.apiService.getSeasonDetail(this.showId, 1)
      .pipe(takeWhile(() => this.keepAlive))
      .subscribe(response => this.seasonDetail.push(response.response));

    this.apiService.getSimilarShows(this.showId)
      .pipe(takeWhile(() => this.keepAlive))
      .subscribe(response => this.similarShows = response.response);
  }

  /** Remove subscriptions when not in use */
  ngOnDestroy(): void {
    this.keepAlive = false;
  }

}
