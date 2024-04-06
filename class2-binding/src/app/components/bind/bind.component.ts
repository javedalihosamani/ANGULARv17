import { Component } from '@angular/core';

@Component({
  selector: 'app-bind',
  standalone: true,
  imports: [],
  templateUrl: './bind.component.html',
  styleUrl: './bind.component.css'
})
export class BindComponent {
  title:string = "This is a Bind Component..!";
  firstName : string = "This is an Angular BindComponent..!";
  lastName = "This is Be-practical Tech Solutions..!";
  mobile = 9876543210;

  message = () => {
    alert("This is an Event Binding Example..!");
  }
}
