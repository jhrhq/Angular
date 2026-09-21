import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SelectStatus } from './select-status/select-status';
import { Todo } from './todo/todo';
import { UserList } from './user-list/user-list';
import { List } from './list/list';
import { Frameworks } from './frameworks/frameworks';
import { CartSummaryComponent } from './cart-summary';
import { TrimTextPipe } from './custom-pipe/trim-text-pipe';
import { KebabCasePipe } from './custom-pipe/kebab-case.pipe';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    Todo,
    UserList,
    SelectStatus,
    List,
    Frameworks,
    CartSummaryComponent,
    TrimTextPipe,
    KebabCasePipe,
  ],
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
