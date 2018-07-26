import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { GLobalVars } from '../../../data/GlobalVars';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  public apiUrl = GLobalVars.apiUri;

  constructor(private http: HttpClient) { }

  private cachedNowShowing: any = new ReplaySubject(1);

  /**
   * Gets a list of all the shows that are showing on the current day
   * @param forceRefresh
   */
  public getNowShowing(forceRefresh?: boolean) {
    const url = this.apiUrl + GLobalVars.tvRoutes.getNowAiring;

    if (!this.cachedNowShowing.observers.length || forceRefresh) {
      this.createGetRequest(url).subscribe(results => this.cachedNowShowing.next(results.response.results));
    }
    return this.cachedNowShowing;
  }


  private createGetRequest(url: string): Observable<any> {
    return this.http.get(url);
  }
}
