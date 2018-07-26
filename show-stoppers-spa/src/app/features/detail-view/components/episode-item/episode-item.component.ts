import { Component, OnInit, Input } from '@angular/core';
import { Episode } from '../../../../models/season.model';

@Component({
  selector: 'app-episode-item',
  templateUrl: './episode-item.component.html',
  styleUrls: ['./episode-item.component.scss']
})
export class EpisodeItemComponent implements OnInit {

  @Input()
  public episode: Episode;
  constructor() { }

  ngOnInit() {
  }

}
