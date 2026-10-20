import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DUMMY_USERS } from './dummy-users';
import { Header } from './header/header';
import { Sidebar } from './shared/sidebar/sidebar';
import { Tasks } from './tasks/tasks';
import { Users } from './users/users';
import { User } from './users/users.model';

@Component({
  imports: [CommonModule, Header, Sidebar, Users, Tasks],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  users: User[] = DUMMY_USERS;
  selectedUserId?: User['id'];

  get getSelectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(userId: User['id']) {
    this.selectedUserId = userId;
  }
}
