import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../../../../models/season.model';

/**
 * @class Show Detail Tab Season
 * This compnent is designed to display an overview of the season if avaliable
 * along with iterate over the season object to pull all the episodes from that season
 * and display them
 */
@Component({
  selector: 'app-show-detail-tab-season',
  templateUrl: './show-detail-tab-season.component.html',
  styleUrls: ['./show-detail-tab-season.component.scss']
})
export class ShowDetailTabSeasonComponent implements OnInit {
  /** season object that will hold all the epsidoes in an array for that current season, sometimes overview also */
  @Input()
  public season: Season;

  constructor() { }

  ngOnInit() {
  }

}
