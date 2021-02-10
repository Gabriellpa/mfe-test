import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './home-menu.route.';
import { HomeMenuComponent } from './home-menu.component';

@NgModule({
  declarations: [HomeMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeMenuModule { }
