import { describe, it, expect } from "vitest";
import { sub } from "./sub";

describe("sub function", () => {
  it("should return the correct result for positive numbers", () => {
    expect(sub(5, 3)).toBe(2);
  });

  it("should return the correct result for negative numbers", () => {
    expect(sub(-5, -3)).toBe(-2);
  });

  it("should return the correct result for a mix of positive and negative numbers", () => {
    expect(sub(5, -3)).toBe(8);
    expect(sub(-5, 3)).toBe(-8);
  });

  it("should return the correct result when subtracting zero", () => {
    expect(sub(5, 0)).toBe(5);
    expect(sub(0, 5)).toBe(-5);
  });

  it("should return zero when subtracting the same number", () => {
    expect(sub(5, 5)).toBe(0);
    expect(sub(-5, -5)).toBe(0);
  });
});
