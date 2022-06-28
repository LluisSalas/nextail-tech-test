import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NextailGridModule } from '@nextail-tech-test/nextail-components';
import { ProductsStoreModule } from '@nextail-tech-test/nextail-store';
import { NextailProductsReportRoutingModule } from './products-report-routing.module';
import { NextailProductsReportListView } from './views/list/products-report-list.view';

@NgModule({
  declarations: [NextailProductsReportListView],
  imports: [CommonModule, NextailProductsReportRoutingModule, ProductsStoreModule, NextailGridModule],
})
export class NextailProductsReportModule {}
