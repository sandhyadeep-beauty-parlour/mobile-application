import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PackagesRoutingModule} from './packages-routing.module';

import {PackagesPage} from './packages.page';
import {HeaderModule} from '../../shared-components/header-component/header-component.module';
import {SearchHeaderComponentModule} from '../../shared-components/search-header-component/search-header-component.module';
import {ModalPopupPage} from '../../shared-components/modal-popup/modal-popup.page';
import {ModalPopupModule} from '../../shared-components/modal-popup/modal-popup.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PackagesRoutingModule,
        HeaderModule,
        SearchHeaderComponentModule,
        ModalPopupModule
    ],
    declarations: [PackagesPage],
    entryComponents: [ModalPopupPage]
})
export class PackagesModule {
}
