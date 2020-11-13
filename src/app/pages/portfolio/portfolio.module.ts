import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PortfolioRoutingModule} from './portfolio-routing.module';

import {PortfolioPage} from './portfolio.page';
import {HeaderModule} from '../../shared-components/header-component/header-component.module';
import {ModalPopupModule} from '../../shared-components/modal-popup/modal-popup.module';
import {ModalPopupPage} from '../../shared-components/modal-popup/modal-popup.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PortfolioRoutingModule,
        HeaderModule,
        ModalPopupModule
    ],
    entryComponents: [ModalPopupPage],
    declarations: [PortfolioPage]
})
export class PortfolioModule {
}
