import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NextailApiModule } from '@nextail-tech-test/nextail-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NextailApiModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
