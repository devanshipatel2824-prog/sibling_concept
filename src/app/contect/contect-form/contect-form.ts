import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contect-form',
  imports: [FormsModule],
  templateUrl: './contect-form.html',
  styleUrl: './contect-form.css',
})
export class ContectForm {
name = '';
  phone = '';

  @Output() sendContact = new EventEmitter<any>();

  submit() {
    this.sendContact.emit({
      name: this.name,
      phone: this.phone
    });

    this.name = '';
    this.phone = '';
  }
}
