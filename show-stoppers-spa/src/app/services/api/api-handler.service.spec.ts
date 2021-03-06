import { MockSeason1 } from './../../../mocks/mocks';
import { Season } from './../../models/season.model';
import { TvItem } from './../../models/tvItem.model';
import { GLobalVars } from './../../../data/GlobalVars';
import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiHandlerService } from './api-handler.service';
import { MockTv1 } from '../../../mocks/mocks';

describe('ApiHandlerService', () => {
  let injector: TestBed;
  let service: ApiHandlerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ApiHandlerService]
    });

    injector = getTestBed();
    service = injector.get(ApiHandlerService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should return now showing array of data', () => {
    const url =  GLobalVars.apiUri + GLobalVars.tvRoutes.getNowAiring;

    const mockTvArray = [
      {id: 4},
      {id: 10}
    ];
    service.getNowShowing().subscribe((response: Array<any>) => {
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockTvArray);

  });

  it('should get the tv show detail by the current id', () => {
    const url = GLobalVars.apiUri + GLobalVars.tvRoutes.getShowDetail;
    const showId = 123;
    service.getTvShowDetails(showId).subscribe((response: TvItem) => {
      expect(response.id).toBe(showId);
    });

    const req = httpMock.expectOne(url + showId);
    expect(req.request.method).toBe('GET');
    req.flush(MockTv1);
  });

  it('should get similar shows by show id', () => {
    const url = GLobalVars.apiUri + GLobalVars.tvRoutes.getSimilarShows;
    const showId = 123;

    service.getSimilarShows(showId).subscribe((response: Array<TvItem>) => {
      expect(response.length).toBe(3);
      expect(response[0].id).toBe(123);
    });

    const req = httpMock.expectOne(url + showId);
    expect(req.request.method).toBe('GET');
    req.flush([MockTv1, MockTv1, MockTv1]);
  });

  it('should get seasons details for the showID', () => {
    const url = GLobalVars.apiUri + GLobalVars.tvRoutes.getSeasonDetail;
    const showId = 123;
    const seasons = 2;

    service.getSeasonDetail(showId, seasons).subscribe((response: Season) => {
      expect(response.id).toBe(777);
    });

    const req = httpMock.expectOne(url + showId + '/' + seasons);
    expect(req.request.method).toBe('GET');
    req.flush(MockSeason1);

  });

  it('should get TV Search array and correct page', () => {
    const url = GLobalVars.apiUri + GLobalVars.tvRoutes.getShowSearch;
    const query = 'super%20girl';
    const page = 2;

    service.getTvSearch(query, page).subscribe(response => {
      expect(response[0].page).toBe(1);
      expect(response[0].total_pages).toBe(1);
    });

    const req = httpMock.expectOne(url + query + '/' + page );
    expect(req.request.method).toBe('GET');
    req.flush([{page: 1, total_results: 8, total_pages: 1, results: []}]);

  });

});
