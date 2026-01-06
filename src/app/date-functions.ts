import {
  format,
  formatISO,
  isDate,
  startOfDay,
  parse,
  parseISO,
  subMonths,
  differenceInDays,
} from 'date-fns';

export function cbParseIsoDate(date: string | Date): Date {
  if (date instanceof Date) {
    return date;
  }
  return parseISO(date);
}

export function cbParseFormat(value: string, formatString: string): Date {
  return parse(value, formatString, new Date());
}

export function cbFormatDate(date: string | Date, formatString: string): string {
  let d = cbParseIsoDate(date);
  return format(d, formatString);
}

export function cbFormatIsoDate(date: string | Date): string {
  let d = cbParseIsoDate(date);
  return formatISO(d);
}

export function cbFormatIsoDateOnly(date: string | Date): string {
  let d = cbParseIsoDate(date);
  return formatISO(d, { representation: 'date' });
}

export function cbIsDate(date: Date): boolean {
  return isDate(date);
}

export function cbStartOfDay(date: string | Date): Date {
  let d = cbParseIsoDate(date);
  return startOfDay(d);
}

export function cbSubtractMonths(date: string | Date, amount: number): Date {
  let d = cbParseIsoDate(date);
  return subMonths(d, amount);
}

export function cbDifferenceInDays(date1: string | Date, date2: string | Date): number {
  let d1 = cbParseIsoDate(date1);
  let d2 = cbParseIsoDate(date2);

  return differenceInDays(d1, d2);
}
