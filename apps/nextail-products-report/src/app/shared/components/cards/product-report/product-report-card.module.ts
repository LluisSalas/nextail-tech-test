import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextailProgressBarModule } from '@nextail-tech-test/nextail-components';
import { NextailProductReportCardComponent } from './product-report-card.component';
import { NextailProductReportCardWhCoverageComponent } from './components/wh-coverage/product-report-card-wh-coverage.component';

@NgModule({
  declarations: [NextailProductReportCardComponent, NextailProductReportCardWhCoverageComponent],
  imports: [CommonModule, NextailProgressBarModule],
  exports: [NextailProductReportCardComponent],
})
export class NextailProductReportCardModule {}
