import {  Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('menu/MenuModule').then((m) => m.HomeMenuModule)
  }
];
