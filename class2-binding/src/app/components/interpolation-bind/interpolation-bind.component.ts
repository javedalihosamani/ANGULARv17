import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-bind',
  standalone: true,
  imports: [],
  templateUrl: './interpolation-bind.component.html',
  styleUrl: './interpolation-bind.component.css'
})
export class InterpolationBindComponent {
  title = "This is an InterpolationBindComponent..!";
  siteURL = window.location.href;
  greet=()=>{
    return "Hello this is a Greet method..!";
  }
  imgURL = "../../../assets/images/image1.jpg";
}
