import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiHandlerService } from './../../services/api/api-handler.service';
import { PosterComponent } from './../index-view/components/poster/poster.component';
import { EpisodeItemComponent } from './components/episode-item/episode-item.component';
import { SimilarShowTabComponent } from './components/similar-show-tab/similar-show-tab.component';
import { ShowDetailTabSeasonComponent } from './components/show-detail-tab-season/show-detail-tab-season.component';
import { ShowDetailContainerComponent } from './components/show-detail-container/show-detail-container.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewComponent } from './detail-view.component';
import { ShowDetailTabContainerComponent } from './components/show-detail-tab-container/show-detail-tab-container.component';
import { NgbModule } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { By } from '@angular/platform-browser';

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailViewComponent,
        ShowDetailContainerComponent,
        ShowDetailTabContainerComponent,
        ShowDetailTabSeasonComponent,
        SimilarShowTabComponent,
        EpisodeItemComponent,
        PosterComponent,
      ],
      imports: [
        NgbModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        ApiHandlerService
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the standard layout', () => {
    component.pageLoading = false;
    fixture.detectChanges();
    const layout = fixture.debugElement.query(By.css('.main-detail-container'));
    expect(layout).toBeTruthy();
    expect(layout.childNodes.length).toBe(3);
  });

});
