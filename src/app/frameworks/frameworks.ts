import { Component, input, signal } from '@angular/core';
import { Framework } from '../framework/framework';

@Component({
  imports: [Framework],
  selector: 'app-frameworks',
  styleUrl: './frameworks.css',
  templateUrl: './frameworks.html',
})
export class Frameworks {
  inputValue = signal('');
  frameworks = signal(['React', 'Angular', 'Svelte', 'Solid', 'Astro']);
  selectedFramework = signal('');

  handleChange(value: string) {
    this.inputValue.set(value);
  }

  addValue() {
    this.frameworks.update((data) => [...data, this.inputValue()]);
    this.inputValue.set('');
  }

  onSelectedFramework(value: string) {
    this.selectedFramework.set(value);
  }
}
