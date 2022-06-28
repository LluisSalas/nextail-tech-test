import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextailPrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: NextailPrivateComponent,
    children: [
      {
        path: 'products-report',
        loadChildren: () =>
          import('./products-report/products-report.module').then((m) => m.NextailProductsReportModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextailPrivateRoutingModule {}
