import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ChildList } from '../child-list/child-list';

@Component({
  imports: [CommonModule, ChildList],
  selector: 'app-list',
  styleUrl: './list.css',
  templateUrl: './list.html',
})
export class List {
  lists = signal(['hi', 'hello', 'what"s up']);
  fruits = signal(['apple', 'banana', 'mango']);
  addFruit = signal('');
  selectedFruit = signal('');

  handleUpdateFruits() {
    this.fruits.update((data) => [...data, this.addFruit()]);
    this.addFruit.set('');
  }

  onFruitSelect(value: string) {
    this.selectedFruit.set(value);
  }
}
