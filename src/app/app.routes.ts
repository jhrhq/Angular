import { Routes } from '@angular/router';
import { Todo } from './todo/todo';
import { UserList } from './user-list/user-list';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: App,
  },
  {
    path: 'todos',
    loadComponent: () => Todo,
  },
  {
    path: 'users',
    loadComponent: () => UserList,
  },
];
