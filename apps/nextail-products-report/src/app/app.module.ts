import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NextailApiModule } from '@nextail-tech-test/nextail-api';
import { NextailGridModule } from '@nextail-tech-test/nextail-components';

import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NextailApiModule.forRoot(), AppStoreModule, NextailGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
