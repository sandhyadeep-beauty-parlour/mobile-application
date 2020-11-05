import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AboutUsPageRoutingModule} from './about-us-routing.module';

import {AboutUsPage} from './about-us.page';
import {HeaderModule} from '../../shared-components/header-component/header-component.module';
import {ServicePageModule} from '../services/services.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AboutUsPageRoutingModule,
        HeaderModule,
        ServicePageModule,
        SlickCarouselModule
    ],
    declarations: [AboutUsPage]
})
export class AboutUsPageModule {
}
