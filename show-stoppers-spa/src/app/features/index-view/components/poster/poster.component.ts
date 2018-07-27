import { Component, OnInit, Input } from '@angular/core';
import { TvItem } from '../../../../models/tvItem.model';
import { GLobalVars } from '../../../../../data/GlobalVars';
import { Router } from '../../../../../../node_modules/@angular/router';

/**
 * @class Poster
 * This component controls the look and feel of the poster element for the shows
 * creating the overall format to be used across the application
 * and allows for the shows to be displayed in the detail section
 * by requesting the route
 */
@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  /** path to the movie db poster store */
  public posterPath = GLobalVars.apiPosterUri;

  /** Poster requires a TvItem to be used to populate the view */
  @Input()
  public poster: TvItem;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * When the user clicks on a poster this will fire to get the
   * details for the poster and display them correctly
   */
  public onClickPoster() {
    this.router.navigate([`/show/${this.poster.id}`]);
  }

}
