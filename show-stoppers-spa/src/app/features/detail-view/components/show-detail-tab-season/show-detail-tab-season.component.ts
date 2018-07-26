import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../../../../models/season.model';

@Component({
  selector: 'app-show-detail-tab-season',
  templateUrl: './show-detail-tab-season.component.html',
  styleUrls: ['./show-detail-tab-season.component.scss']
})
export class ShowDetailTabSeasonComponent implements OnInit {

  @Input()
  public season: Season;

  constructor() { }

  ngOnInit() {
  }

}
