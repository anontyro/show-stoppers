import { ApiHandlerService } from './../../services/api/api-handler.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IndexViewComponent } from './index-view.component';
import { PosterComponent } from './components/poster/poster.component';

describe('IndexViewComponent', () => {
  let component: IndexViewComponent;
  let fixture: ComponentFixture<IndexViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IndexViewComponent,
        PosterComponent
       ],
       imports: [
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
    fixture = TestBed.createComponent(IndexViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the index layout', () => {
    const poster = fixture.debugElement.query(By.css('.poster-view'));
    expect(poster).toBeTruthy();
  });

});
