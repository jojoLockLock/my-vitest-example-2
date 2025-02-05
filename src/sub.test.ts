import { describe, it, expect } from 'vitest';
import { sub } from './sub';

// xxxx



describe('sub', () => {
  it('should subtract two positive numbers', () => {
    expect(sub(5, 3)).toBe(2);
  });

  it('should subtract a negative number', () => {
    expect(sub(5, -3)).toBe(8);
  });

  it('should subtract from a negative number', () => {
    expect(sub(-5, 3)).toBe(-8);
  });

  it('should subtract two negative numbers', () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it('should subtract zero', () => {
    expect(sub(5, 0)).toBe(5);
  });

  it('should subtract from zero', () => {
    expect(sub(0, 5)).toBe(-5);
  });

  it('should handle decimal numbers', () => {
    expect(sub(5.5, 2.2)).toBeCloseTo(3.3);
  });
});
