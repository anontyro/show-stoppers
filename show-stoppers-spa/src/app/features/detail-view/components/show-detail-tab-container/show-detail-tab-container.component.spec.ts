import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailTabContainerComponent } from './show-detail-tab-container.component';

describe('ShowDetailTabContainerComponent', () => {
  let component: ShowDetailTabContainerComponent;
  let fixture: ComponentFixture<ShowDetailTabContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailTabContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
