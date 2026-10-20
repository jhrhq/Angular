import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './users.model';

@Component({
  imports: [],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
