import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Frameworks } from './frameworks';

describe('Frameworks', () => {
  let component: Frameworks;
  let fixture: ComponentFixture<Frameworks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Frameworks],
    }).compileComponents();

    fixture = TestBed.createComponent(Frameworks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
