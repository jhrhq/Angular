import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./app').then((m) => m.App),
  },
  {
    path: 'todos',
    loadComponent: () => import('./todo/todo').then((m) => m.Todo),
  },
];
