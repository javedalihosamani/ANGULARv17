import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [NgClass],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent {
  third:string = 'thirdExample'

  hasError = true;

  checkStyle(){
   this.hasError = !this.hasError;
   this.addClass.firstExample = this.hasError;
   this.addClass.secondExample = !this.hasError;
  }

  addClass = {
    firstExample : this.hasError,
    secondExample : !this.hasError
  };
}
