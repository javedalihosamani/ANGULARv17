import { Component } from '@angular/core';
import { NgContentChildComponent } from './ng-content-child/ng-content-child.component';

@Component({
  selector: 'app-ng-content',
  standalone: true,
  imports: [NgContentChildComponent],
  templateUrl: './ng-content.component.html',
  styleUrl: './ng-content.component.css'
})
export class NgContentComponent {

}
