import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'negativenumber'
})
export class NegativenumberPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log("negative number display value:"+value);
    return Math.abs(value);
  }

}
