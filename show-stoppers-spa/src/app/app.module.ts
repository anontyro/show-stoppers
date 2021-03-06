import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { IndexViewComponent } from './features/index-view/index-view.component';
import { ListViewComponent } from './features/list-view/list-view.component';
import { DetailViewComponent } from './features/detail-view/detail-view.component';
import { MainLayoutComponent } from './_layout/main-layout/main-layout.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { AppRoutes } from './routes';
import { PosterComponent } from './features/index-view/components/poster/poster.component';
import { ShowDetailContainerComponent } from './features/detail-view/components/show-detail-container/show-detail-container.component';
// tslint:disable-next-line:max-line-length
import { ShowDetailTabContainerComponent } from './features/detail-view/components/show-detail-tab-container/show-detail-tab-container.component';
import { ShowDetailTabSeasonComponent } from './features/detail-view/components/show-detail-tab-season/show-detail-tab-season.component';
import { EpisodeItemComponent } from './features/detail-view/components/episode-item/episode-item.component';
import { SimilarShowTabComponent } from './features/detail-view/components/similar-show-tab/similar-show-tab.component';
import { SearchViewComponent } from './features/search-view/search-view.component';
import { AboutViewComponent } from './features/about-view/about-view.component';
import { SearchBarComponent } from './features/search-view/components/search-bar/search-bar.component';
import { SearchResultsComponent } from './features/search-view/components/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexViewComponent,
    ListViewComponent,
    DetailViewComponent,
    MainLayoutComponent,
    PosterComponent,
    ShowDetailContainerComponent,
    ShowDetailTabContainerComponent,
    ShowDetailTabSeasonComponent,
    EpisodeItemComponent,
    SimilarShowTabComponent,
    SearchViewComponent,
    AboutViewComponent,
    SearchBarComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
