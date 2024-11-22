@@ -1,26 +1,31 @@
-@@ -0,0 +1,25 @@
-+import { describe, it, expect } from 'vitest';
-+import { sum } from './sum';
-+
-+describe('sum', () => {
-+  it('should return the sum of two positive numbers', () => {
-+    expect(sum(1, 2)).toBe(3);
-+  });
-+
-+  it('should return the sum of two negative numbers', () => {
-+    expect(sum(-1, -2)).toBe(-3);
-+  });
-+
-+  it('should return the sum of a positive and a negative number', () => {
-+    expect(sum(1, -2)).toBe(-1);
-+  });
-+
-+  it('should return 0 when both numbers are 0', () => {
-+    expect(sum(0, 0)).toBe(0);
-+  });
-+
-+  it('should return the other number when one number is 0', () => {
-+    expect(sum(0, 5)).toBe(5);
-+    expect(sum(5, 0)).toBe(5);
-+  });
-+});
\ No newline at end of file
+import { describe, it, expect } from 'vitest';
+import { sum } from './sum';
+
+describe('sum', () => {
+  it('should return the sum of two positive numbers', () => {
+    expect(sum(1, 2)).toBe(3);
+  });
+
+  it('should return the sum of two negative numbers', () => {
+    expect(sum(-1, -2)).toBe(-3);
+  });
+
+  it('should return the sum of a positive and a negative number', () => {
+    expect(sum(1, -2)).toBe(-1);
+  });
+
+  it('should return 0 when both numbers are 0', () => {
+    expect(sum(0, 0)).toBe(0);
+  });
+
+  it('should return the other number when one number is 0', () => {
+    expect(sum(0, 5)).toBe(5);
+    expect(sum(5, 0)).toBe(5);
+  });
+
+  it('should return NaN when one or both numbers are NaN', () => {
+    expect(sum(NaN, 2)).toBeNaN();
+    expect(sum(2, NaN)).toBeNaN();
+    expect(sum(NaN, NaN)).toBeNaN();
+  });
+});