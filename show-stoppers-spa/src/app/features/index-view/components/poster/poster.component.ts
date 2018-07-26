import { Component, OnInit, Input } from '@angular/core';
import { TvItem } from '../../../../models/tvItem.model';
import { GLobalVars } from '../../../../../data/GlobalVars';
import { Router } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  public posterPath = GLobalVars.apiPosterUri;

  @Input()
  public poster: TvItem;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onClickPoster() {
    console.log(this.poster.id);
    this.router.navigate([`/show/${this.poster.id}`]);
  }

}
