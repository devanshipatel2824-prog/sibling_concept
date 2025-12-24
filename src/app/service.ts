import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Service {
result = signal<number>(0);
Resultclear = true;
display = signal<string>('');
  // number add and give codition when to clear the answer when we click the new number
 addNumber(n: number) {
  if (this.Resultclear) {   
    this.display.set('' + n);
    this.Resultclear = false;
    return;
  }
  this.display.set(this.display() + n);
}
  // add the oprator
  addOperator(op: string) {
    this.display.set(this.display() + op);
  }
// existing logic

  add(value: number) 
  {
    this.result.set(this.result() + value);
  }

  subtract(value: number) 
  {
    this.result.set(this.result() - value);
  }

  multiply(value: number) 
  {
    this.result.set(this.result() * value);
  }

  divide(value: number) 
  {
    if (value !== 0) {
      this.result.set(this.result() / value);
    } else {
      this.result.set(0);
    }
  }

 equal()
 {
    const exp = this.display();

    let numbers: number[] = [];
    let operators: string[] = [];
    let temp = '';

  //  split numbers & operators
  for (let ch of exp) {
    if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
      numbers.push(Number(temp));
      operators.push(ch);
      temp = '';
    } else {
      temp += ch;
    }
  }
  numbers.push(Number(temp));

  // work with * and /
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === '*' || operators[i] === '/') {
      let result =
        operators[i] === '*'
          ? numbers[i] * numbers[i + 1]
          : numbers[i] / numbers[i + 1];

      numbers.splice(i, 2, result);   // replace 2 numbers by result
      operators.splice(i, 1);         // remove operator
      i--;                             // re-check same index
    }
  }

  // work with + and -
  let total = numbers[0];
  for (let i = 0; i < operators.length; i++) 
  {
    if (operators[i] === '+') total += numbers[i + 1];

    if (operators[i] === '-') total -= numbers[i + 1];
  }
  this.Resultclear = true;
  this.result.set(total);
  this.display.set(exp + '=' + total);
}
clear() {
    this.result.set(0);
    this.display.set('');
  }

}
