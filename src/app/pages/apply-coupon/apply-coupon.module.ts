import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ApplyCouponRoutingModule} from './apply-coupon-routing.module';

import {ApplyCouponPage} from './apply-coupon.page';
import {BackLogoComponentModule} from '../../shared-components/back-logo-component/back-logo-component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ApplyCouponRoutingModule,
        BackLogoComponentModule
    ],
    declarations: [ApplyCouponPage]
})
export class ApplyCouponModule {
}
