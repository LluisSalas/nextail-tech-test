import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'private',
    pathMatch: 'full',
  },
  {
    path: 'private',
    loadChildren: () => import('./modules/private/private.module').then((m) => m.NextailPrivateModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
