import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsPage} from './products.page';
import {SearchHeaderComponentModule} from '../../shared-components/search-header-component/search-header-component.module';
import {AddButtonModule} from '../../shared-components/add-button/add-button.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductsRoutingModule,
        SearchHeaderComponentModule,
        AddButtonModule
    ],
    declarations: [ProductsPage]
})
export class ProductsModule {
}
