import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  @Input() message:string = "";

  constructor() {
    console.log(`This is a child constructor`);
    //console.log(`Parent text box value is ${this.message}`);
  }

  ngOnChanges(){
    console.log(`ngOnChanges Hook called..!`);
    // console.log(`Parent text box value is ${this.message}`);
  }

  ngOnInit(){
    console.log('ngOnInit Hook called Child Component');
    // console.log(`Parent text box value is ${this.message}`);
  }

  ngDoCheck(){
    console.log('ngDoCheck Hook called');
    //console.log(`Parent text box value is ${this.message}`);
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit Hook called');
  }
  
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked Hook called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit Hook called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked Hook called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Hook called');
  }
}
