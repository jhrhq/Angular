import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SelectStatus } from './select-status/select-status';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SelectStatus],
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
