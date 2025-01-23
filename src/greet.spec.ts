import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {

  it('should return default greeting with name', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting with name', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  it('should handle empty string name', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should handle empty string greeting', () => {
    // Empty string greeting should fall back to default greeting
    expect(greet('John', '')).toBe('Hello, John!');
  });

  it('should handle special characters in name', () => {
    expect(greet('John@123')).toBe('Hello, John@123!');
  });

  it('should handle special characters in greeting', () => {
    expect(greet('John', 'Hey!!!')).toBe('Hey!!!, John!');
  });

  it('should handle spaces in name', () => {
    expect(greet('John Doe')).toBe('Hello, John Doe!');
  });

  it('should handle spaces in greeting', () => {
    expect(greet('John', 'Good morning')).toBe('Good morning, John!');
  });

  it('should handle undefined greeting', () => {
    expect(greet('John', undefined)).toBe('Hello, John!');
  });

  it('should handle unicode characters in name', () => {
    expect(greet('José')).toBe('Hello, José!');
  });

  it('should handle unicode characters in greeting', () => {
    expect(greet('John', '¡Hola')).toBe('¡Hola, John!');
  });

});
