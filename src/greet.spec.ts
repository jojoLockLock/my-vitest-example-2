import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return a greeting with "Hello" when no greeting is provided', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  it('should return a custom greeting when a greeting is provided', () => {
    expect(greet('Bob', 'Hi')).toBe('Hi, Bob!');
  });

  it('should handle an empty name with default greeting', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should handle an empty name with custom greeting', () => {
    expect(greet('', 'Greetings')).toBe('Greetings, !');
  });

  it('should handle an empty greeting with a name', () => {
    expect(greet('Charlie', '')).toBe('Hello, Charlie!');
  });

  it('should handle both name and greeting as empty strings', () => {
    expect(greet('', '')).toBe('Hello, !');
  });
});
