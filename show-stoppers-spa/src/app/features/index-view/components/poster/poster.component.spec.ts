import { By } from '@angular/platform-browser';
import { MockTv1 } from './../../../../../mocks/mocks';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterComponent } from './poster.component';

describe('PosterComponent', () => {
  let component: PosterComponent;
  let fixture: ComponentFixture<PosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PosterComponent
       ],
      imports: [
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterComponent);
    component = fixture.componentInstance;
    component.poster = MockTv1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the poster page layout', () => {
    const poster = fixture.debugElement.query(By.css('.poster-container'));
    expect(poster).toBeTruthy();
    expect(poster.childNodes.length).toBe(2);
  });

});
