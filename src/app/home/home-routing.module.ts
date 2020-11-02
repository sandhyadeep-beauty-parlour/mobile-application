import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeRouter} from './home.router';


@NgModule({
    imports: [HomeRouter],
    exports: [RouterModule],
})
export class HomePageRoutingModule {
}
