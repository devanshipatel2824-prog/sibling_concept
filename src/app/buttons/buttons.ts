import { Component, HostListener } from '@angular/core';
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
 // Map keys to actions
  private keyMap: Record<string, () => void> = {
    '+': () => this.service.addOperator('+'),
    '-': () => this.service.addOperator('-'),
    '*': () => this.service.addOperator('*'),
    '/': () => this.service.addOperator('/'),
    'Enter': () => this.service.equal(),
    'Backspace': () => this.service.display.set(this.service.display().slice(0, -1)),
    'Escape': () => this.service.clear(),
  };

  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    const key = event.key;

    if (!isNaN(Number(key))) {
      // If number, call addNumber
      this.service.addNumber(Number(key));
    } else if (this.keyMap[key]) {
      // If key is in map, call corresponding function
      this.keyMap[key]();
    }
  }
}
