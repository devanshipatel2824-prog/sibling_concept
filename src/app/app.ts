import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contect } from "./contect/contect";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Contect],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sibling');
}
