import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePage} from './home.page';

const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
        children: [
            {
                path: '',
                loadChildren: () => import('../pages/feed/feed.module').then((e) => e.FeedPageModule)
            }, {
                path: 'feed',
                loadChildren: () => import('../pages/feed/feed.module').then((e) => e.FeedPageModule)
            }, {
                path: 'notifications',
                loadChildren: () => import('../pages/notifications/notifications.module').then((e) => e.NotificationsPageModule)
            }, {
                path: 'messages',
                loadChildren: () => import('../pages/messages/messages.module').then((e) => e.MessagesPageModule)
            }, {
                path: 'settings',
                loadChildren: () => import('../pages/settings/settings.module').then((e) => e.SettingsPageModule)
            }
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouter {}
