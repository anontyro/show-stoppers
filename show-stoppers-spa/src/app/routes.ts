import { Routes } from '@angular/router';
import { IndexViewComponent } from './features/index-view/index-view.component';
import { DetailViewComponent } from './features/detail-view/detail-view.component';
import { ListViewComponent } from './features/list-view/list-view.component';
import { MainLayoutComponent } from './_layout/main-layout/main-layout.component';

export const AppRoutes: Routes = [
    {path: '', component: MainLayoutComponent, children: [
        {path: '', component: IndexViewComponent},
        {path: 'list', component: ListViewComponent},
        {path: 'show/:id', component: DetailViewComponent},
    ]}
];
