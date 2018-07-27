import { Component, OnInit, Input } from '@angular/core';
import { TvItem } from '../../../../models/tvItem.model';

/**
 * @class Similar Show Tab
 * This tab displays a list of similar shows which is input into this component
 * This shows will relate in one way or another to the main show
 * this again uses the poster component
 */
@Component({
  selector: 'app-similar-show-tab',
  templateUrl: './similar-show-tab.component.html',
  styleUrls: ['./similar-show-tab.component.scss']
})
export class SimilarShowTabComponent implements OnInit {
  /** required Array of all the TvItem that are someway related */
  @Input()
  public similarShows: Array<TvItem>;
  constructor() { }

  ngOnInit() {
  }

}
