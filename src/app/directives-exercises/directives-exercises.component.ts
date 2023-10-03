import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-exercises',
  templateUrl: './directives-exercises.component.html',
  styleUrls: ['./directives-exercises.component.css']
})
export class DirectivesExercisesComponent {
  displayParagraph: boolean = true;
  clickEvents: ClickEvent[] = [];
  counter: number = 0;

  displayDetailsClick(click: PointerEvent) {
    this.displayParagraph = !this.displayParagraph;    
    this.clickEvents.push({
      id: ++this.counter,
      timestamp: new Date().toISOString(),
      description: "click"
    })
  }
}

export class ClickEvent {
  id: number;
  timestamp: string;
  description: string
}
