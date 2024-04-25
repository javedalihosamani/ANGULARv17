import { Component } from '@angular/core';
import { SimpleDirective } from '../../directive/simple.directive';
import { ScrollToTopDirective } from '../../directive/scroll-to-top.directive';

@Component({
  selector: 'app-custom-directive',
  standalone: true,
  imports: [SimpleDirective, ScrollToTopDirective],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.css'
})
export class CustomDirectiveComponent {

}
