import {  Routes } from '@angular/router';
import { HomeMenuComponent } from './home-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeMenuComponent,
    pathMatch: 'full'
  }
];
