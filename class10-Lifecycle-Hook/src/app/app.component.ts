import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Child1Component, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    console.log(`App Component Constructor Called..!`);
  }

  inputVal:string ="";
  toDestroy: boolean = false;

  onBtnClicked(inputEl : HTMLInputElement){
    console.log(`inputEl = ${inputEl}`);

    this.inputVal = inputEl.value;
    console.log(`this.inputVal = ${this.inputVal}`);
  }
}
