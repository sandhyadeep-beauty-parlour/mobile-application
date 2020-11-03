import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginImageBackgroundPage } from './login-image-background.page';

const routes: Routes = [
  {
    path: '',
    component: LoginImageBackgroundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
