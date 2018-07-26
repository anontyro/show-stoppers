import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ApiHandlerService } from '../../services/api/api-handler.service';
import { takeWhile } from '../../../../node_modules/rxjs/operators';
import { TvItem } from '../../models/tvItem.model';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit, OnDestroy {

  private showId: number;
  private keepAlive = true;

  public showDetail: TvItem;
  public seasonDetail;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiHandlerService
  ) { }

  ngOnInit() {
    this.route.params
     .pipe(takeWhile(() => this.keepAlive))
      .subscribe(params => {
      this.showId = params['id'];
    });
    this.apiService.getTvShowDetails(this.showId)
      .pipe(takeWhile(() => this.keepAlive))
      .subscribe(response => this.showDetail = response.response);

    this.apiService.getSeasonDetail(this.showId, 1)
    .pipe(takeWhile(() => this.keepAlive))
    .subscribe(response => console.log(response.response));
  }


  ngOnDestroy(): void {
    this.keepAlive = false;
  }

}
