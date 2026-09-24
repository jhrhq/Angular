import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimaryExcercises } from './primary-excercises';

describe('PrimaryExcercises', () => {
  let component: PrimaryExcercises;
  let fixture: ComponentFixture<PrimaryExcercises>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryExcercises],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimaryExcercises);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
