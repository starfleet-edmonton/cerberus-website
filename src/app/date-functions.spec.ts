import { cbDifferenceInDays, cbFormatDate } from './date-functions';

describe('Date Functions', () => {
  it('return formatted string', () => {
    let d = new Date('2020-12-15 12:00');
    let result = cbFormatDate(d, 'MMM dd, yyyy');
    expect(result).toBe('Dec 15, 2020');

    d = new Date('2001-01-03 12:00');
    result = cbFormatDate(d, 'MMM dd, yyyy');
    expect(result).toBe('Jan 03, 2001');
  });

  it('returns the difference in days', () => {
    let d1 = new Date('2020-01-01');
    let d2 = new Date('2020-01-05');
    let diff = cbDifferenceInDays(d1, d2);
    expect(diff).toBe(-4);

    diff = cbDifferenceInDays(d2, d1);
    expect(diff).toBe(4);
  });
});
