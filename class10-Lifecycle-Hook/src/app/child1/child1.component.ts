import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  @Input() message:string = "";

  constructor() {
    console.log(`Parent text box value is ${this.message}`);
  }
}
