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
import { ShowDetailTabContainerComponent } from './features/detail-view/components/show-detail-tab-container/show-detail-tab-container.component';
import { ShowDetailTabSeasonComponent } from './features/detail-view/components/show-detail-tab-season/show-detail-tab-season.component';

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
    ShowDetailTabSeasonComponent
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
