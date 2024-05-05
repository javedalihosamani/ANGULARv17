import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation3',
  standalone: true,
  imports: [NgIf],
  templateUrl: './animation3.component.html',
  styleUrl: './animation3.component.css',
  animations: [
    trigger('slider', [
      state('login', style({
          backgroundColor: 'darkorange',
          color: '#fff',
          padding: '30px'
      })),
      state('signUp', style({
          backgroundColor: 'violet',
          color:'#fff',
          padding:'30px'
      })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('5s ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
          style({ transform: 'translateX(0%)'}),
          animate('1s ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class Animation3Component {
  status= true;

  toggleSlider() {
    this.status = !this.status;
  }
}
