import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiHandlerService } from '../../services/api/api-handler.service';
import { takeWhile } from 'rxjs/operators';
import { TvItem } from '../../models/tvItem.model';

/**
 * @class Index View
 * Main home page for the application
 * currently a bit basic just displaying the top 20 shows that are currently
 * airing but it provides a good starting point for users whilst not being to complex
 */
@Component({
  selector: 'app-index-view',
  templateUrl: './index-view.component.html',
  styleUrls: ['./index-view.component.scss']
})
export class IndexViewComponent implements OnInit, OnDestroy {
  /** Complete list of the first page of now showing, 20 shows airing by popularity */
  public nowShowing: Array<TvItem> = [];
  /** controls the subscriptions to prevent memory leaks */
  private keepAlive = true;

  constructor(private apiService: ApiHandlerService) { }

  ngOnInit() {
    // on create call the api to get teh now showing and add to the list
    this.apiService.getNowShowing()
    .pipe(takeWhile(() => this.keepAlive))
      .subscribe(response => {
        this.nowShowing = response;
      });
  }

  /** remove the subscriptions when page is cleared */
  ngOnDestroy(): void {
    this.keepAlive = false;
  }

}
