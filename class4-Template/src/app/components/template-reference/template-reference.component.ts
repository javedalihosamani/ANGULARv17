import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  standalone: true,
  imports: [],
  templateUrl: './template-reference.component.html',
  styleUrl: './template-reference.component.css'
})
export class TemplateReferenceComponent {
  result1:any;
  result2:any;

  ClickOnButton1(value:any){
    console.log(value);
    this.result1 = value;
  }

  ClickOnButton2(value:any){
    console.log(value);
    this.result2 = value;
  }
}
