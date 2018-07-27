import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ShowDetailContainerComponent } from './show-detail-container.component';
import { MockTv1 } from '../../../../../mocks/mocks';

describe('ShowDetailContainerComponent', () => {
  let component: ShowDetailContainerComponent;
  let fixture: ComponentFixture<ShowDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailContainerComponent ],
      imports: [

      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailContainerComponent);
    component = fixture.componentInstance;
    component.showDetail = MockTv1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the image container', () => {
    const img = fixture.debugElement.query(By.css('.img-container'));
    console.log(img);
    expect(img).toBeTruthy();
  });

  it('should create the info section', () => {
    const info = fixture.debugElement.query(By.css('.show-title'));
    console.log(info);
    expect(info).toBeTruthy();
  });

  it('should create the blurb', () => {
    const blurb = fixture.debugElement.query(By.css('.show-blurb'));
    console.log(blurb);
    expect(blurb).toBeTruthy();
  });

});
