import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Observables {
  getNumber(): Observable<number> {
    return new Observable((observer) => {
      observer.next(10);
      observer.next(20);
      observer.next(30);
      observer.complete();
    });
  }
}
