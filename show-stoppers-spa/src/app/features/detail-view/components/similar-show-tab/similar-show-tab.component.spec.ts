import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarShowTabComponent } from './similar-show-tab.component';

describe('SimilarShowTabComponent', () => {
  let component: SimilarShowTabComponent;
  let fixture: ComponentFixture<SimilarShowTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarShowTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarShowTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
