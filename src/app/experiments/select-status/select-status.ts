import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-select-status',
  styleUrl: './select-status.css',
  templateUrl: './select-status.html',
})
export class SelectStatus {
  status = signal('');
  statusList = signal(['In Progress', 'Success', 'Error']);
  userStatus = signal<'Available' | 'Offline'>('Offline');

  handleStatus(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.status.set(target.value);
  }

  handleToggleUserStatus() {
    this.userStatus.set(this.userStatus() === 'Available' ? 'Offline' : 'Available');
  }
}
