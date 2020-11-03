import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexPage} from './index.page';

const routes: Routes = [
    {
        path: '',
        component: IndexPage,
        children: [
            // {
            //     path: '',
            //     loadChildren: () => import('../pages/welcome/welcome.module').then((e) => e.WelcomePageModule)
            // },
            {
                path: '',
                loadChildren: () => import('../pages/login-image-background/login-image-background.module').then((e) => e.LoginImageBackgroundPageModule)
            }, {
                path: 'signup',
                loadChildren: () => import('../pages/signup/signup.module').then((e) => e.SignupPageModule)
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IndexRouter {
}
