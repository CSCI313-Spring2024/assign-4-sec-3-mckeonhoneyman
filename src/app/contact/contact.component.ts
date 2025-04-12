import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
    fName = '';
    lName = '';
    phone = '';
    email = '';
    address = '';
    notes = '';


    @Input() index!: number;
    @Output() back = new EventEmitter<void>();
    @Output() edit = new EventEmitter<void>();
    @Output() delete = new EventEmitter<void>();

    contact!: Contact;

    goBack() {
      this.back.emit();
    }

    editContact() {
      this.edit.emit();
    }
    
    deleteContact() {
      this.delete.emit();
    }

    ngOnInit() {
      this.contact = this.contactService.getContacts()[this.index];
    }
    constructor(private contactService: ContactService){}


}
