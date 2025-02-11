import { describe, it, expect } from "vitest";
import { sub } from "./example";

describe("sub", () => {
  it("should return the correct result for positive numbers", () => {
    expect(sub(10, 5)).toBe(5);
    expect(sub(20, 10)).toBe(10);
  });

  it("should handle negative numbers correctly", () => {
    expect(sub(-10, -5)).toBe(-5);
    expect(sub(-5, 10)).toBe(-15);
  });

  it("should return 0 when both numbers are the same", () => {
    expect(sub(5, 5)).toBe(0);
    expect(sub(-10, -10)).toBe(0);
  });

  it("should handle scenarios where the result is negative", () => {
    expect(sub(5, 10)).toBe(-5);
    expect(sub(0, 10)).toBe(-10);
  });

  it("should handle zero correctly", () => {
    expect(sub(0, 0)).toBe(0);
    expect(sub(10, 0)).toBe(10);
    expect(sub(0, 10)).toBe(-10);
  });
});
