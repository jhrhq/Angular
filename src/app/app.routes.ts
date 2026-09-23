import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';
import { App } from './app';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: App },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'profile', component: Profile },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: '**', component: PageNotFound },
  // { path: '**', redirectTo: '' },
];
