import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchViewComponent } from './search-view.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FormsModule } from 'node_modules/@angular/forms';
import { PosterComponent } from '../index-view/components/poster/poster.component';
import { By } from '@angular/platform-browser';

describe('SearchViewComponent', () => {
  let component: SearchViewComponent;
  let fixture: ComponentFixture<SearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchViewComponent,
        SearchBarComponent,
        SearchResultsComponent,
        PosterComponent
       ],
       imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
       ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create search view layout', () => {
    const layout = fixture.debugElement.query(By.css('.search-align-container'));
    expect(layout).toBeTruthy();
  });

});
