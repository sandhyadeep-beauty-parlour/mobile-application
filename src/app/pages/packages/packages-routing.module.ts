import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackagesPage } from './packages.page';

const routes: Routes = [
  {
    path: '',
    component: PackagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackagesRoutingModule {}
