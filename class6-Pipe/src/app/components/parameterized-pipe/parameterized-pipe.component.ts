import { CurrencyPipe, DatePipe, DecimalPipe, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parameterized-pipe',
  standalone: true,
  imports: [SlicePipe, CurrencyPipe, DecimalPipe, DatePipe],
  templateUrl: './parameterized-pipe.component.html',
  styleUrl: './parameterized-pipe.component.css'
})
export class ParameterizedPipeComponent {
  message : string = "Hey, Welcome to Angular-Pipe...!";

  date =  new Date();
}
