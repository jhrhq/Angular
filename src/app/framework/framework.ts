import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-framework',
  styleUrl: './framework.css',
  templateUrl: './framework.html',
})
export class Framework {
  framework = input.required<string>();
}
