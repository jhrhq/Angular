import { Component } from '@angular/core';
import { Todo } from '../../todo/todo';
import { UserList } from '../../user-list/user-list';
import { SelectStatus } from '../../select-status/select-status';
import { List } from '../../list/list';
import { Frameworks } from '../../frameworks/frameworks';
import { CartSummaryComponent } from '../../cart-summary';
import { KebabCasePipe } from '../../custom-pipe/kebab-case.pipe';

@Component({
  imports: [Todo, UserList, SelectStatus, List, Frameworks, CartSummaryComponent, KebabCasePipe],
  selector: 'app-primary-excercises',
  styleUrl: './primary-excercises.css',
  templateUrl: './primary-excercises.html',
})
export class PrimaryExcercises {
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
