import { TestBed } from '@angular/core/testing';
import { Observables } from './observables';

describe('Observables', () => {
  let service: Observables;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Observables);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
