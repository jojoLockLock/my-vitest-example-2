import { describe, it, expect } from 'vitest'
import { sub } from './example'

describe('sub', () => {
  it('should subtract two positive numbers', () => {
    expect(sub(5, 3)).toBe(2)
  })

  it('should subtract with negative numbers', () => {
    expect(sub(-5, 3)).toBe(-8)
    expect(sub(5, -3)).toBe(8)
    expect(sub(-5, -3)).toBe(-2)
  })

  it('should subtract with zero', () => {
    expect(sub(5, 0)).toBe(5)
    expect(sub(0, 3)).toBe(-3)
    expect(sub(0, 0)).toBe(0)
  })

  it('should handle decimal numbers', () => {
    expect(sub(5.5, 2.2)).toBe(3.3)
    expect(sub(0.1, 0.2)).toBeCloseTo(-0.1)
  })
})
