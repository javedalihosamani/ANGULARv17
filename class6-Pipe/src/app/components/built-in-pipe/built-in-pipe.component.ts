import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipe',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, PercentPipe, CurrencyPipe, JsonPipe, DatePipe],
  templateUrl: './built-in-pipe.component.html',
  styleUrl: './built-in-pipe.component.css'
})
export class BuiltInPipeComponent {
  message: string = "Hey, welcome to Angular-Pipe..!";

  data = {
    firstName : "Be-practical",
    lastName : "Tech Solutions",
    technology : "Angular-17"
  }

  date = new Date();
}
