import { describe, it, expect } from 'vitest';
import { sub } from './sub';

describe('sub', () => {
  it('should return the correct result for positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should return the correct result for negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should return the correct result for mixed positive and negative numbers', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should return the correct result when the result is negative', () => {
    expect(sub(3, 5)).toBe(-2);
  });

  it('should return zero when subtracting a number from itself', () => {
    expect(sub(7, 7)).toBe(0);
  });
});
