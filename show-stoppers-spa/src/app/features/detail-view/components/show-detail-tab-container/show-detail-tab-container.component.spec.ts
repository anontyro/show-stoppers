import { SimilarShowTabComponent } from './../similar-show-tab/similar-show-tab.component';
import { ShowDetailTabSeasonComponent } from './../show-detail-tab-season/show-detail-tab-season.component';
import { MockTv1, MockSeason1, MockSeason2 } from './../../../../../mocks/mocks';
import { ApiHandlerService } from './../../../../services/api/api-handler.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { ShowDetailTabContainerComponent } from './show-detail-tab-container.component';
import { NgbModule } from '../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { EpisodeItemComponent } from '../episode-item/episode-item.component';
import { PosterComponent } from '../../../index-view/components/poster/poster.component';

describe('ShowDetailTabContainerComponent', () => {
  let component: ShowDetailTabContainerComponent;
  let fixture: ComponentFixture<ShowDetailTabContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShowDetailTabContainerComponent,
        ShowDetailTabSeasonComponent,
        SimilarShowTabComponent,
        EpisodeItemComponent,
        PosterComponent,
       ],
       imports: [
        NgbModule.forRoot(),
        HttpClientTestingModule
       ],
      providers: [
        ApiHandlerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailTabContainerComponent);
    component = fixture.componentInstance;
    component.totalSeasons = 2;
    component.showId = 123;
    component.similarShows = [MockTv1, MockTv1];
    component.seasonDetail = [MockSeason1, MockSeason2];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get active season', () => {
    const season = component.getActiveSeason();
    expect(season).toBeTruthy();
    expect(season.season_number).toBe(1);
  });

  it('should change to season two', () => {
    let season = component.getActiveSeason();
    expect(season.season_number).toBe(1);
    season = component.changeSeason(2);
    expect(season.season_number).toBe(2);
  });

});
