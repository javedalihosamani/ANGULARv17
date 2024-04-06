import { Component } from '@angular/core';

@Component({
  selector: 'app-property-bind',
  standalone: true,
  imports: [],
  templateUrl: './property-bind.component.html',
  styleUrl: './property-bind.component.css'
})
export class PropertyBindComponent {
  title: string = "This is a Property Bind Component..!";

  myId : string = 'fullName';

  bindId = "Angular";
}
