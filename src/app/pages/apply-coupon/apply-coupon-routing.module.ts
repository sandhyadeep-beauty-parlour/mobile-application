import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyCouponPage } from './apply-coupon.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyCouponPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyCouponRoutingModule {}
