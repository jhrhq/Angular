import { Component, signal } from '@angular/core';
import { Framework } from '../framework/framework';

@Component({
  imports: [Framework],
  selector: 'app-frameworks',
  styleUrl: './frameworks.css',
  templateUrl: './frameworks.html',
})
export class Frameworks {
  frameworks = signal(['React', 'Angular', 'Svelte', 'Solid', 'Astro']);
}
