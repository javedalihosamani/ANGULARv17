import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  data1 : any;
  data2 : any;
  data3 : any;

  ClickEvent1(){
    this.data1 = "You are Triggered ClientEvent1 Method...!";
  }

  ClickEvent2(event:any){
    console.log(event);
    this.data2 = event.type;
  }
}
