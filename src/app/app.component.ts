import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from "./add-contact/add-contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactComponent, TaskbarComponent, CommonModule, ContactListComponent, AddContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-4';

  currentView: 'list' | 'add' | 'edit' | 'view' = 'list';
  contactIndex: number | null = null;

  showContactDetail(index: number) {
    this.contactIndex = index;
    this.currentView = 'view';
  }

  setView(view: 'list' | 'add' | 'edit' | 'view'){
    this.currentView = view;
  }

  goBackToList() {
    this.currentView = 'list';
  }
}
