import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NextailBarGrpahModule,
  NextailButtonModule,
  NextailProgressBarModule,
} from '@nextail-tech-test/nextail-components';
import { NextailProductReportCardComponent } from './product-report-card.component';
import { NextailProductReportCardWhCoverageComponent } from './components/wh-coverage/product-report-card-wh-coverage.component';
import { NextailProductReportCardOverlayComponent } from './components/overlay/product-report-card-overlay.component';
import { NextailProductReportCardBarGraphComponent } from './components/bar-graph/product-report-card-bar-graph.component';

@NgModule({
  declarations: [
    NextailProductReportCardComponent,
    NextailProductReportCardWhCoverageComponent,
    NextailProductReportCardOverlayComponent,
    NextailProductReportCardBarGraphComponent,
  ],
  imports: [CommonModule, NextailProgressBarModule, NextailButtonModule, NextailBarGrpahModule],
  exports: [NextailProductReportCardComponent],
})
export class NextailProductReportCardModule {}
