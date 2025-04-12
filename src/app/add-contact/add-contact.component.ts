import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  fName = '';
  lName = '';
  phone = '';
  email = '';
  address = '';
  notes = '';
  
  constructor(private contactService: ContactService){}
  
  @Output() saveBtnPressed = new EventEmitter<void>();

  save(){
    const newContact: Contact = {
      fName: this.fName,
      lName: this.lName,
      phone: this.phone,
      email: this.email,
      address: this.address,
      notes: this.notes
    };
    
    this.contactService.addContact(newContact);
    this.saveBtnPressed.emit();
  }
}
