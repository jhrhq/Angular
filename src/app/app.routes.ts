import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';
import { App } from './app';

export const routes: Routes = [
  { path: '', component: App },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'profile', component: Profile },
];
