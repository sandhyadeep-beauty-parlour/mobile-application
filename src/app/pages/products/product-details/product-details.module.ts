import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsPage } from './product-details.page';
import {BackLogoComponentModule} from '../../../shared-components/back-logo-component/back-logo-component.module';
import {AddButtonModule} from '../../../shared-components/add-button/add-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsRoutingModule,
    BackLogoComponentModule,
      AddButtonModule
  ],
  declarations: [ProductDetailsPage]
})
export class ProductDetailsModule {}
