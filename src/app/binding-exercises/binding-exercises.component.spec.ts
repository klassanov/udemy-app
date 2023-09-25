import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingExercisesComponent } from './binding-exercises.component';

describe('BindingExercisesComponent', () => {
  let component: BindingExercisesComponent;
  let fixture: ComponentFixture<BindingExercisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingExercisesComponent]
    });
    fixture = TestBed.createComponent(BindingExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
