import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SelectStatus } from './select-status/select-status';
import { Todo } from './todo/todo';
import { UserList } from './user-list/user-list';
import { List } from './list/list';

@Component({
  imports: [RouterOutlet, Todo, UserList, SelectStatus, List],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly username = signal('Jhr');
  count = 0;
  enable = false;

  counter(action: string) {
    if (action === 'minus') {
      this.count > 0 && this.count--;
    } else {
      this.count++;
    }
  }

  handleEvent(event: string) {
    console.log(event);
  }

  toggleEnable() {
    this.enable = !this.enable;
  }
}
