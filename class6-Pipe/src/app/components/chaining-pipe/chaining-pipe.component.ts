import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chaining-pipe',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, JsonPipe],
  templateUrl: './chaining-pipe.component.html',
  styleUrl: './chaining-pipe.component.css'
})
export class ChainingPipeComponent {
  date = new Date();

  data = {
    "firstName":"Be-practical",
    "lastName":"Tech Solutions..!",
    "technology":"Angular-17"
  }
}
