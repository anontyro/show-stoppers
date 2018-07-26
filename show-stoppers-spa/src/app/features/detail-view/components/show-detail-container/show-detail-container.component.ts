import { Component, OnInit, Input } from '@angular/core';
import { TvItem } from '../../../../models/tvItem.model';
import { GLobalVars } from '../../../../../data/GlobalVars';

@Component({
  selector: 'app-show-detail-container',
  templateUrl: './show-detail-container.component.html',
  styleUrls: ['./show-detail-container.component.scss']
})
export class ShowDetailContainerComponent implements OnInit {

  public posterPath = GLobalVars.apiPosterUri;

  public showExtendedBlurb = false;

  @Input()
  public showDetail: TvItem;
  constructor() { }

  ngOnInit() {
  }

}
