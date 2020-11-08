import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { BackLogoComponentPage } from './back-logo-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    BackLogoComponentPage
  ],
  declarations: [BackLogoComponentPage]
})
export class BackLogoComponentModule {}
