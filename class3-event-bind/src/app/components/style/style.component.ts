import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './style.component.html',
  styleUrl: './style.component.css'
})
export class StyleComponent {
  highlight : any = "blue";

 style1 : any  = {
  background : 'teal',
  color:"#fff",
  padding:"20px",
  borderRadius: "10px"
 };

 hasError = true;

 checkStyle(){
  this.hasError = !this.hasError;
 }
}
