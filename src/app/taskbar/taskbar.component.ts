import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  imports: [],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css'
})
export class TaskbarComponent {
  title:string = 'ContactX';
  buttonLabel: string = 'Add Contact';
  @Output() addButtonClicked = new EventEmitter<void>();

  onClick(){
    this.addButtonClicked.emit();
  }
}
