import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  private route = inject(ActivatedRoute);
  id: string | null = null;
  name: string | null = null;
  age: string | null = null;

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.id = params.get('id');
      this.name = params.get('name');
      this.age = params.get('age');
    });
  }
}
