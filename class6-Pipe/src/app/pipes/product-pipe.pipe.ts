import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gstStatePipe',
  standalone: true
})
export class ProductPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const [price] = args;
    return price * (9/100);
  }
}
/* function A(...firstNumber:any){}
A(100,200,300); */