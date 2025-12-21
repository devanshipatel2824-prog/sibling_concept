import { Component } from '@angular/core';
import { ContectForm } from './contect-form/contect-form';
import { ContectList } from './contect-list/contect-list';

@Component({
  selector: 'app-contect',
  imports: [ContectForm,ContectList ],
  templateUrl: './contect.html',
  styleUrl: './contect.css',
})
export class Contect {
contacts: any[] = [];

  receiveContact(data: any) {
    this.contacts.push(data);
  }
}
