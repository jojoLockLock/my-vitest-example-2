import { describe, it, expect } from "vitest";
import { sub } from "./example";

describe("sub", () => {
  it("should return the correct subtraction result for positive numbers", () => {
    expect(sub(10, 5)).toBe(5);
    expect(sub(20, 15)).toBe(5);
  });

  it("should return the correct subtraction result for negative numbers", () => {
    expect(sub(-10, -5)).toBe(-5);
    expect(sub(-20, -15)).toBe(-5);
  });

  it("should return the correct subtraction result when subtracting a positive and a negative number", () => {
    expect(sub(10, -5)).toBe(15);
    expect(sub(-10, 5)).toBe(-15);
  });

  it("should return the correct subtraction result when subtracting zero", () => {
    expect(sub(10, 0)).toBe(10);
    expect(sub(0, 10)).toBe(-10);
  });

  it("should return zero when both numbers are the same", () => {
    expect(sub(10, 10)).toBe(0);
    expect(sub(-10, -10)).toBe(0);
  });
});
