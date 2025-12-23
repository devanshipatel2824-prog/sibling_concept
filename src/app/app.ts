import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Buttons } from "./buttons/buttons";
import { Display } from "./display/display";
import { Service } from './service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Buttons, Display],
  providers: [Service],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Calculater');
}
