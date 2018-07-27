import { Component, OnInit, Input } from '@angular/core';
import { TvItem } from '../../../../models/tvItem.model';
import { GLobalVars } from '../../../../../data/GlobalVars';

/**
 * @class Show Detail Container
 * This component is used to hold the main information about the show
 * and forms the left hand side of the screen on show detail
 */
@Component({
  selector: 'app-show-detail-container',
  templateUrl: './show-detail-container.component.html',
  styleUrls: ['./show-detail-container.component.scss']
})
export class ShowDetailContainerComponent implements OnInit {

  /** poster uri to use to get the default call from the movie database to be used when getting the images */
  public posterPath = GLobalVars.apiPosterUri;
  /** boolean that will control the blurb if it is longer than 200 characters allowing a more consistent user experience */
  public showExtendedBlurb = false;

  /** showDetail is required to create this component as it will use the objects data to popular the view */
  @Input()
  public showDetail: TvItem;
  constructor() { }

  ngOnInit() {
  }

}
