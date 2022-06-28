import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NextailGridModule } from '@nextail-tech-test/nextail-components';
import { ProductsStoreModule } from '@nextail-tech-test/nextail-store';
import { NextailProductReportCardModule } from '../../../shared/components/cards/product-report/product-report-card.module';
import { NextailPrivateMainLayoutModule } from '../../../shared/layouts/private-main/private-main-layout.module';
import { NextailProductsReportRoutingModule } from './products-report-routing.module';
import { NextailProductsReportListView } from './views/list/products-report-list.view';

@NgModule({
  declarations: [NextailProductsReportListView],
  imports: [
    CommonModule,
    NextailProductsReportRoutingModule,
    ProductsStoreModule,
    NextailPrivateMainLayoutModule,
    NextailGridModule,
    NextailProductReportCardModule,
  ],
})
export class NextailProductsReportModule {}
