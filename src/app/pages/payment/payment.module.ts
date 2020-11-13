import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PaymentRoutingModule} from './payment-routing.module';

import {PaymentPage} from './payment.page';
import {BackLogoComponentModule} from '../../shared-components/back-logo-component/back-logo-component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PaymentRoutingModule,
        BackLogoComponentModule
    ],
    declarations: [PaymentPage]
})
export class PaymentModule {
}
