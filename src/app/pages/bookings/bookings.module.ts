import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingsRoutingModule } from './bookings-routing.module';

import { BookingsPage } from './bookings.page';
import {HeaderModule} from '../../shared-components/header-component/header-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingsRoutingModule,
      HeaderModule
  ],
  declarations: [BookingsPage]
})
export class BookingsModule {}
