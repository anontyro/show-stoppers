import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexViewComponent } from './features/index-view/index-view.component';
import { ListViewComponent } from './features/list-view/list-view.component';
import { DetailViewComponent } from './features/detail-view/detail-view.component';
import { MainLayoutComponent } from './_layout/main-layout/main-layout.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { AppRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    IndexViewComponent,
    ListViewComponent,
    DetailViewComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
