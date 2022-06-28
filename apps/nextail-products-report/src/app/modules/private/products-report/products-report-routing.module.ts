import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextailProductsReportListView } from './views/list/products-report-list.view';

const routes: Routes = [
  {
    path: '',
    component: NextailProductsReportListView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextailProductsReportRoutingModule {}
