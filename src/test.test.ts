import { describe, it, expect } from "vitest";
import { sub } from "./test";

describe("sub", () => {
  it("should return the sum of two positive numbers", () => {
    expect(sub(2, 3)).toBe(5);
  });

  it("should return the sum of a positive and a negative number", () => {
    expect(sub(5, -3)).toBe(2);
  });

  it("should return the sum of two negative numbers", () => {
    expect(sub(-2, -3)).toBe(-5);
  });

  it("should return the sum when one of the numbers is zero", () => {
    expect(sub(0, 5)).toBe(5);
    expect(sub(5, 0)).toBe(5);
  });

  it("should return zero when both numbers are zero", () => {
    expect(sub(0, 0)).toBe(0);
  });

  it("should handle large numbers correctly", () => {
    expect(sub(1_000_000, 2_000_000)).toBe(3_000_000);
  });
});
