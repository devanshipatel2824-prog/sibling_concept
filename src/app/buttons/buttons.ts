import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class Buttons  {

  constructor(public service: Service) {}

  number(n: number) {
  this.service.addNumber(n);
}

op(op: string) {
  this.service.addOperator(op);
}

equal() {
  this.service.equal();
}

clear() {
  this.service.clear();
}
}
