import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicePageRoutingModule } from './services-routing.module';

import { ServicesPage } from './services.page';
import {HeaderModule} from '../../shared-components/header-component/header-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicePageRoutingModule,
    HeaderModule
  ],
  exports: [
    ServicesPage
  ],
  declarations: [ServicesPage]
})
export class ServicePageModule {}
