import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiHandlerService } from '../../services/api/api-handler.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-index-view',
  templateUrl: './index-view.component.html',
  styleUrls: ['./index-view.component.scss']
})
export class IndexViewComponent implements OnInit, OnDestroy {


  public nowShowing: Array<any> = [];

  private keepAlive = true;

  constructor(private apiService: ApiHandlerService) { }

  ngOnInit() {
    this.apiService.getNowShowing()
    .pipe(takeWhile(() => this.keepAlive))
      .subscribe(response => {
        console.log(response);
      });
  }

  ngOnDestroy(): void {
    this.keepAlive = false;
  }

}
