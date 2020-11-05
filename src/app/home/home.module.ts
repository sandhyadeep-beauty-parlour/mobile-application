import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { HomePage } from './home.page';
import {HomeRouter} from './home.router';
import {HeaderModule} from '../shared-components/header-component/header-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRouter,
    HeaderModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
