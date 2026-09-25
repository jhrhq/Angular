import { Component, OnInit } from '@angular/core';
import { Observables } from '../../services/observables';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  numbers: number[] = [];

  constructor(private service: Observables) {}

  ngOnInit(): void {
    this.service.getNumber().subscribe({
      next: (data) => {
        this.numbers.push(data);
      },
    });
  }
}
