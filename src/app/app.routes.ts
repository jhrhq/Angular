import { Routes } from '@angular/router';
import { Todo } from './todo/todo';
import { UserList } from './user-list/user-list';

export const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadComponent: () => import('./app').then((m) => m.App),
  // },
  {
    path: 'todos',
    loadComponent: () => Todo,
  },
  {
    path: 'users',
    loadComponent: () => UserList,
  },
];
