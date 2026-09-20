import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Count {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    if (this.count() == 0) return;
    this.count.set(this.count() - 1);
  }
}
