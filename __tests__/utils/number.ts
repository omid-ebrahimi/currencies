import { formatWithCommas, numberWithCommas } from '@src/utils/number';

describe('numberWithCommas()', () => {
  it('format integers correctly', () => {
    const value = 12569845;
    const result = numberWithCommas(value);
    expect(result).toBe('12,569,845');
  });

  it('format currencies correctly', () => {
    const value = 12569.25;
    const result = numberWithCommas(value);
    expect(result).toBe('12,569.25');
  });
});

describe('formatWithCommas()', () => {
  it("don't touch none number values", () => {
    const value = 'Unknown';
    const result = formatWithCommas(value);
    expect(result).toBe('Unknown');
  });
});
