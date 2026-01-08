import { Pipe, PipeTransform } from '@angular/core';
import { cbFormatDate, cbIsDate, cbParseIsoDate } from '../date-functions';

@Pipe({ name: 'ctDate' })
export class CtDatePipe implements PipeTransform {
  transform(value: any, nullValue?: string): string {
    if (value === null || value === undefined || value === '') {
      return nullValue ? nullValue : '';
    }
    let d = cbParseIsoDate(value);
    if (!cbIsDate(d)) {
      return '';
    } else {
      return cbFormatDate(value, 'MMM dd, yyyy - HH:mm');
    }
  }
}
