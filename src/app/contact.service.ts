import { Injectable } from '@angular/core';

export interface Contact {
  fName: string;
  lName: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private contacts: Contact[] = [
    {
      fName: 'John',
      lName: 'Doe',
      phone: '123-456-7890',
      email: 'john@example.com',
      address: '123 Main St',
      notes: 'Loves coffee'
    },
    {
      fName: 'Jane',
      lName: 'Smith',
      phone: '987-654-3210',
      email: 'jane@example.com',
      address: '456 Oak Ave',
      notes: 'Prefers email contact'
    }
  ];

  addContact(contact: Contact){
    this.contacts.push(contact);
  }

  removeContact(index: number){
    this.contacts.splice(index, 1);
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

}
