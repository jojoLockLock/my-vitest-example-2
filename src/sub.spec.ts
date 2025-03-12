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
    expect(sub(-5, 3)).toBe(-8);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sub(0, 0)).toBe(0);
  });

  it('should handle subtraction resulting in zero', () => {
    expect(sub(3, 3)).toBe(0);
  });
});
