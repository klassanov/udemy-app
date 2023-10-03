import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExercisesComponent } from './directives-exercises.component';

describe('DirectivesExercisesComponent', () => {
  let component: DirectivesExercisesComponent;
  let fixture: ComponentFixture<DirectivesExercisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesExercisesComponent]
    });
    fixture = TestBed.createComponent(DirectivesExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
