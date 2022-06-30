import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextailButtonModule, NextailProgressBarModule } from '@nextail-tech-test/nextail-components';
import { NextailProductReportCardComponent } from './product-report-card.component';
import { NextailProductReportCardWhCoverageComponent } from './components/wh-coverage/product-report-card-wh-coverage.component';
import { NextailProductReportCardOverlayComponent } from './components/overlay/product-report-card-overlay.component';

@NgModule({
  declarations: [
    NextailProductReportCardComponent,
    NextailProductReportCardWhCoverageComponent,
    NextailProductReportCardOverlayComponent,
  ],
  imports: [CommonModule, NextailProgressBarModule, NextailButtonModule],
  exports: [NextailProductReportCardComponent],
})
export class NextailProductReportCardModule {}
