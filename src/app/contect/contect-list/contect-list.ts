import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contect-list',
  imports: [CommonModule],
  templateUrl: './contect-list.html',
  styleUrl: './contect-list.css',
})
export class ContectList {
 @Input() contactList: any[] = [];
}
