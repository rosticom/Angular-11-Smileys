
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormatPipe'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let datePipe = new DatePipe("en-US");
      let valuePipe = datePipe.transform(value, 'hh:mm a | MMM dd, yyyy');
    return valuePipe;
  }

}
