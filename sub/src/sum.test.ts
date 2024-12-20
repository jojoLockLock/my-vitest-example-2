import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(2, 3)).toBe(5); // This will fail because the function performs subtraction
  });

  it('should demonstrate the incorrect behavior by returning the subtraction of two numbers', () => {
    expect(sum(2, 3)).toBe(-1); // This will pass because the function is currently subtracting
  });
});
