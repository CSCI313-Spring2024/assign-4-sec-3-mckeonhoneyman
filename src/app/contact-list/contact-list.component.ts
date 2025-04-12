import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactService, Contact } from '../contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  @Output() viewContact = new EventEmitter<number>();

  selectContact(index: number) {
    this.viewContact.emit(index);
  }

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  onClick(){

  }

}
