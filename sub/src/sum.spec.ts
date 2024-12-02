import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the result of subtracting the second number from the first', () => {
    expect(sum(1, 2)).toBe(-1);
  });

  it('should return the result of subtracting the second number from the first when one is negative', () => {
    expect(sum(5, -2)).toBe(7);
  });

  it('should return the result of subtracting the second number from the first when both are negative', () => {
    expect(sum(-3, -2)).toBe(-1);
  });

  it('should return the result of subtracting zero from a number', () => {
    expect(sum(7, 0)).toBe(7);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
