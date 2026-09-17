import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child-list',
  styleUrl: './child-list.css',
  templateUrl: './child-list.html',
})
export class ChildList {
  fruit = input.required<string>();
  selected = output<string>();

  choose() {
    this.selected.emit(this.fruit());
  }
}
