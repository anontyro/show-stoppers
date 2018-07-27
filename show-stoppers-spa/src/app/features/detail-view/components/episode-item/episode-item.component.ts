import { Episode } from './../../../../models/season.model';
import { Component, OnInit, Input } from '@angular/core';

/**
 * @class Episode Item
 * This component controls the episode item to be displayed in a row format
 * just showing the episode number, name and air-date they are of fixed width to
 * keep consistency
 */
@Component({
  selector: 'app-episode-item',
  templateUrl: './episode-item.component.html',
  styleUrls: ['./episode-item.component.scss']
})
export class EpisodeItemComponent implements OnInit {

  /**
   * @param episode: Episode
   * Input of the episode object is required to populate this item
   * and must be given inorder to create this object
   */
  @Input()
  public episode: Episode;
  constructor() { }

  ngOnInit() {
  }

}
