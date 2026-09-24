import { Routes } from '@angular/router';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Dashboard } from './vehicle-renting/dashboard/dashboard';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';
import { Login } from './pages/login/login';
import { Layout } from './vehicle-renting/layout/layout';
import { Booking } from './vehicle-renting/booking/booking';
import { VehicleMaster } from './vehicle-renting/vehicle-master/vehicle-master';
import { CustomerListing } from './vehicle-renting/customer-listing/customer-listing';

/*
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'profile', component: Profile },
  { path: 'login', component: Login },
  // { path: 'dashboard', component: Dashboard },

  // vehicle renting
  {
    path: 'vehicle-renting',
    component: Layout,
    // Note: If you want to force login, use a Route Guard (canActivate) here,
    // rather than a duplicate route with a redirect.
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
    ],
  },

  // Wildcard MUST be at the very bottom
  { path: '**', component: PageNotFound },
];
 */

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'vehicles',
        component: VehicleMaster,
      },
      {
        path: 'customers',
        component: CustomerListing,
      },
    ],
  },
];
