import { formatWithCommas, numberWithCommas } from './number';

describe('numberWithCommas()', () => {
  it('given an integer, returns comma-separated string', () => {
    const value = 12569845;
    const result = numberWithCommas(value);
    expect(result).toBe('12,569,845');
  });
  it('given a currency with 2 decimal points, returns comma-separated currency', () => {
    const value = 12569.25;
    const result = numberWithCommas(value);
    expect(result).toBe('12,569.25');
  });
});

describe('formatWithCommas()', () => {
  it('given a string that can be converted to number, returns a comma-separated string', () => {
    const value = '12345.256';
    const result = formatWithCommas(value);
    expect(result).toBe('12,345.256');
  });
  it("'given a string that can't be converted to number, returns the given string'", () => {
    const value = 'Unknown';
    const result = formatWithCommas(value);
    expect(result).toBe('Unknown');
  });
});
