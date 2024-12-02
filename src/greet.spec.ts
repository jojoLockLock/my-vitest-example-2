import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a default greeting when no greeting is provided', () => {
    const result = greet('John');
    expect(result).toBe('Hello, John!');
  });

  it('should return a custom greeting when a greeting is provided', () => {
    const result = greet('John', 'Good morning');
    expect(result).toBe('Good morning, John!');
  });

  it('should handle empty name with default greeting', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });

  it('should handle empty name with custom greeting', () => {
    const result = greet('', 'Hi');
    expect(result).toBe('Hi, !');
  });

  it('should handle empty greeting', () => {
    const result = greet('John', '');
    expect(result).toBe('Hello, John!');
  });
});
