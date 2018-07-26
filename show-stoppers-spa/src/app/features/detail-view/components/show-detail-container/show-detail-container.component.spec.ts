import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailContainerComponent } from './show-detail-container.component';

describe('ShowDetailContainerComponent', () => {
  let component: ShowDetailContainerComponent;
  let fixture: ComponentFixture<ShowDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
