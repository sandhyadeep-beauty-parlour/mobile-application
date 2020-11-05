import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfolioRoutingModule } from './portfolio-routing.module';

import { PortfolioPage } from './portfolio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortfolioRoutingModule
  ],
  declarations: [PortfolioPage]
})
export class PortfolioModule {}
