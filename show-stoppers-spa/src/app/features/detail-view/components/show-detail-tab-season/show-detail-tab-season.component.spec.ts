import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailTabSeasonComponent } from './show-detail-tab-season.component';

describe('ShowDetailTabSeasonComponent', () => {
  let component: ShowDetailTabSeasonComponent;
  let fixture: ComponentFixture<ShowDetailTabSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailTabSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailTabSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
