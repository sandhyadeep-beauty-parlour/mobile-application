import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { SearchHeaderComponentPage } from './search-header-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    SearchHeaderComponentPage
  ],
  declarations: [SearchHeaderComponentPage]
})
export class SearchHeaderComponentModule {}
