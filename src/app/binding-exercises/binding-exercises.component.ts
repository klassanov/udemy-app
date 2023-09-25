import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-exercises',
  templateUrl: './binding-exercises.component.html',
  styleUrls: ['./binding-exercises.component.css']
})
export class BindingExercisesComponent {
  username='';

  onResetUsername(event:any){
    this.username='';
  }
}
