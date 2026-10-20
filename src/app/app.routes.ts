import { Routes } from '@angular/router';
import { PageNotFound } from './experiments/pages/page-not-found/page-not-found';
import { App } from './app';

export const routes: Routes = [
  { path: '', component: App },
  // Wildcard MUST be at the very bottom
  { path: '**', component: PageNotFound },
];

/* export const routes: Routes = [
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
 */
