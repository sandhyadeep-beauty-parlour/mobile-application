import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FeedPageRoutingModule} from './feed-routing.module';

import {FeedPage} from './feed.page';
import {HeaderModule} from '../../shared-components/header-component/header-component.module';
import {AddButtonModule} from '../../shared-components/add-button/add-button.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FeedPageRoutingModule,
        HeaderModule,
        AddButtonModule
    ],
    declarations: [FeedPage]
})
export class FeedPageModule {
}
