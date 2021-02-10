import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeMenuModule } from './home-menu/home-menu.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
