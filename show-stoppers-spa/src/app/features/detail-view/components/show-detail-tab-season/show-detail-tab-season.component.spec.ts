import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailTabSeasonComponent } from './show-detail-tab-season.component';
import { ShowDetailTabContainerComponent } from '../show-detail-tab-container/show-detail-tab-container.component';
import { SimilarShowTabComponent } from '../similar-show-tab/similar-show-tab.component';
import { EpisodeItemComponent } from '../episode-item/episode-item.component';
import { PosterComponent } from '../../../index-view/components/poster/poster.component';
import { NgbModule } from '../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '../../../../../../node_modules/@angular/common/http/testing';
import { ApiHandlerService } from '../../../../services/api/api-handler.service';
import { MockSeason1 } from '../../../../../mocks/mocks';
import { By } from '../../../../../../node_modules/@angular/platform-browser';

describe('ShowDetailTabSeasonComponent', () => {
  let component: ShowDetailTabSeasonComponent;
  let fixture: ComponentFixture<ShowDetailTabSeasonComponent>;

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
    fixture = TestBed.createComponent(ShowDetailTabSeasonComponent);
    component = fixture.componentInstance;
    component.season = MockSeason1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the overview when its length > 10', () => {
    const overview = fixture.debugElement.query(By.css('p'));
    expect(overview).toBeTruthy();
  });
});
