import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PackageDetailsRoutingModule } from './package-details-routing.module';
import { PackageDetailsPage } from './package-details.page';
import {BackLogoComponentModule} from '../../../shared-components/back-logo-component/back-logo-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PackageDetailsRoutingModule,
    BackLogoComponentModule
  ],
  declarations: [PackageDetailsPage]
})
export class PackageDetailsModule {}
