import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';

const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
        children: [
            {
                path: '',
                loadChildren: () => import('../pages/feed/feed.module').then((e) => e.FeedPageModule)
            },
            {
                path: 'feed',
                loadChildren: () => import('../pages/feed/feed.module').then((e) => e.FeedPageModule)
            },
            {
                path: 'about-us',
                loadChildren: () => import('../pages/about-us/about-us.module').then((e) => e.AboutUsPageModule)
            },
            {
                path: 'services',
                loadChildren: () => import('../pages/services/services.module').then((e) => e.ServicePageModule)
            }, {
                path: 'portfolio',
                loadChildren: () => import('../pages/portfolio/portfolio.module').then((e) => e.PortfolioModule)
            }, {
                path: 'notifications',
                loadChildren: () => import('../pages/notifications/notifications.module').then((e) => e.NotificationsPageModule)
            }, {
                path: 'messages',
                loadChildren: () => import('../pages/messages/messages.module').then((e) => e.MessagesPageModule)
            }, {
                path: 'settings',
                loadChildren: () => import('../pages/settings/settings.module').then((e) => e.SettingsPageModule)
            }, {
                path: 'packages',
                loadChildren: () => import('../pages/packages/packages.module').then((e) => e.PackagesModule)
            }, {
                path: 'products',
                loadChildren: () => import('../pages/products/products.module').then((e) => e.ProductsModule)
            }, {
                path: 'bookings',
                loadChildren: () => import('../pages/bookings/bookings.module').then((e) => e.BookingsModule)
            }, {
                path: 'apply-coupon',
                loadChildren: () => import('../pages/apply-coupon/apply-coupon.module').then((e) => e.ApplyCouponModule)
            }, {
                path: 'schedule-appointment',
                loadChildren: () => import('../pages/schedule-appointment/schedule-appointment.module')
                    .then((e) => e.ScheduleAppointmentModule)
            }
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouter {
}
