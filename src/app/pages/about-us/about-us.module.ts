import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AboutUsPageRoutingModule} from './about-us-routing.module';

import {AboutUsPage} from './about-us.page';
import {HeaderModule} from '../../shared-components/header-component/header-component.module';
import {ServicePageModule} from '../services/services.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {ModalPopupModule} from '../../shared-components/modal-popup/modal-popup.module';
import {ModalPopupPage} from '../../shared-components/modal-popup/modal-popup.page';
import {SearchHeaderComponentModule} from '../../shared-components/search-header-component/search-header-component.module';
import {ServicesListModule} from '../../shared-components/services-list/services-list.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutUsPageRoutingModule,
        HeaderModule,
        ServicePageModule,
        SlickCarouselModule,
        ModalPopupModule,
        SearchHeaderComponentModule,
        ServicesListModule
    ],
    entryComponents: [ModalPopupPage],
    declarations: [AboutUsPage]
})
export class AboutUsPageModule {
}
