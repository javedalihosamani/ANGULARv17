import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation1',
  standalone: true,
  imports: [],
  templateUrl: './animation1.component.html',
  styleUrl: './animation1.component.css',
  animations: [
    trigger('animateArc', [
      state('true', style({
        left:'400px',
        top:'20px'
      })),
      state('false', style({
        left:'0px',
        top:'20px'
      })),
      transition('false=>true', animate('1000ms linear', keyframes([
        style({ left: '0px', top: '20px', offset:0 }),
        style({ left: '200px', top: '100px', offset:0.50 }),
        style({ left: '400px', top: '20px',offset:1})
      ]))),
      transition('true=>false', animate('1000ms linear', keyframes([
        style({ left: '400px', top: '20px', offset:0 }),
        style({ left: '200px', top: '100px', offset:0.50 }),
        style({ left: '0px', top: '20px',offset:1})
      ])))
    ])
  ] 
})
export class Animation1Component {
  arc:string = "false";

  toggleBounce(){
    this.arc = this.arc == "false"? "true" : "false";
  }
}
