import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-framework',
  styleUrl: './framework.css',
  templateUrl: './framework.html',
})
export class Framework {
  framework = input.required<string>();
  selectFramework = output<string>();
  deleteFramework = output<string>();

  choose() {
    this.selectFramework.emit(this.framework());
  }

  delete() {
    this.deleteFramework.emit(this.framework());
  }
}
