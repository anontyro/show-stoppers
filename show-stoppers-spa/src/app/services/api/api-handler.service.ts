import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { GLobalVars } from '../../../data/GlobalVars';

/**
 * @class Api Handler Service
 * Main api service that is used to control data flow to and from the api
 * currently is caching now showing the rest will all pull fresh data
 */
@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {
  /** Api url to be used to get the data */
  public apiUrl = GLobalVars.apiUri;

  constructor(private http: HttpClient) { }
  // cached data for now showing as this will not require updating for the time the user is on the site
  private cachedNowShowing: any = new ReplaySubject(1);

  /**
   * Gets a list of all the shows that are showing on the current day
   * will only call the request once before caching the results for following requests
   * @param forceRefresh optional boolean on true will force new data from the server
   */
  public getNowShowing(forceRefresh?: boolean) {
    const url = this.apiUrl + GLobalVars.tvRoutes.getNowAiring;

    if (!this.cachedNowShowing.observers.length || forceRefresh) {
      this.createGetRequest(url).subscribe(results => this.cachedNowShowing.next(results.response.results));
    }
    return this.cachedNowShowing;
  }

  /**
   * Gets the details for the current show using the showId from The Movie Database
   * @param showId unique id from the movie database
   */
  public getTvShowDetails(showId: number) {
    const url = this.apiUrl + GLobalVars.tvRoutes.getShowDetail + showId;

    return this.createGetRequest(url);
  }

  /**
   * Get a list of similar shows to the current one searched for
   * @param showId unique id from the movie database
   */
  public getSimilarShows(showId: number) {
    const url = this.apiUrl + GLobalVars.tvRoutes.getSimilarShows + showId;

    return this.createGetRequest(url);
  }

  /**
   * Gets all the details for a specific shows season
   * @param showId unique id from the movie database
   * @param season number for the season only valid int format
   */
  public getSeasonDetail(showId: number, season: number) {
    const url = this.apiUrl + GLobalVars.tvRoutes.getSeasonDetail + showId + '/' + season;

    return this.createGetRequest(url);
  }

  /**
   * Get search results based on the query provided defaulting to the first page
   * @param query url encoded query
   * @param page default 1
   */
  public getTvSearch(query: string, page = 1) {
    const url = this.apiUrl + GLobalVars.tvRoutes.getShowSearch + query + '/' + page;

    return this.createGetRequest(url);
  }

  // base method used to create the rest
  private createGetRequest(url: string): Observable<any> {
    return this.http.get(url);
  }
}
