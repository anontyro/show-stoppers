import { AboutViewComponent } from './../../features/about-view/about-view.component';
import { DetailViewComponent } from './../../features/detail-view/detail-view.component';
import { ListViewComponent } from './../../features/list-view/list-view.component';
import { AppRoutes } from './../../routes';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { MainLayoutComponent } from './main-layout.component';
import { IndexViewComponent } from '../../features/index-view/index-view.component';
import { SearchViewComponent } from '../../features/search-view/search-view.component';
import { PosterComponent } from '../../features/index-view/components/poster/poster.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainLayoutComponent,
       ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a nav bar', () => {
    const nav: DebugElement = fixture.debugElement.query(By.css('.navbar'));
    expect(nav).toBeTruthy();
  });

  it('should have two router links', () => {
    const nav: DebugElement = fixture.debugElement.query(By.css('.navbar-nav'));
    expect(nav).toBeTruthy();
    expect(nav.childNodes.length).toBe(2);
    expect(nav.childNodes[0].attributes.routerLink).toBe('/search');
    expect(nav.childNodes[1].attributes.routerLink).toBe('/about');
  });

});
