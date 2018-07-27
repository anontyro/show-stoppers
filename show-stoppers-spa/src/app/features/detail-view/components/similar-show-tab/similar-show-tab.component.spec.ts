import { MockTv1 } from './../../../../../mocks/mocks';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '../../../../../../node_modules/@angular/platform-browser';

import { SimilarShowTabComponent } from './similar-show-tab.component';
import { PosterComponent } from '../../../index-view/components/poster/poster.component';

describe('SimilarShowTabComponent', () => {
  let component: SimilarShowTabComponent;
  let fixture: ComponentFixture<SimilarShowTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SimilarShowTabComponent,
        PosterComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarShowTabComponent);
    component = fixture.componentInstance;
    component.similarShows = [MockTv1];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the show items in the container', () => {
    const container = fixture.debugElement.query(By.css('.similar-container'));
    expect(container).toBeTruthy();
  });
});
