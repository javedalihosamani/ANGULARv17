import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {
  example2:boolean = true; 
  example3:boolean = true; 
  example3Click(){
    this.example3 =!this.example3;
  }
}
