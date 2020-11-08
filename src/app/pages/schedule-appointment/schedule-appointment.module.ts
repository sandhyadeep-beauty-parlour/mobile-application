import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleAppointmentRoutingModule } from './schedule-appointment-routing.module';

import { ScheduleAppointmentPage } from './schedule-appointment.page';
import {BackLogoComponentModule} from '../../shared-components/back-logo-component/back-logo-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleAppointmentRoutingModule,
      BackLogoComponentModule
  ],
  declarations: [ScheduleAppointmentPage]
})
export class ScheduleAppointmentModule {}
