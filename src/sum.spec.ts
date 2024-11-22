@@ -1,35 +1,178 @@
-@@ -0,0 +1,33 @@
-+@@ -0,0 +1,31 @@
-++@@ -0,0 +1,29 @@
-+++@@ -0,0 +1,27 @@
-++++@@ -0,0 +1,25 @@
-+++++@@ -0,0 +1,24 @@
-++++++import { describe, it, expect } from 'vitest';
-++++++import { sum } from './sum';
-++++++
-++++++describe('sum', () => {
-++++++  it('should return the sum of two positive numbers', () => {
-++++++    expect(sum(1, 2)).toBe(3);
-++++++  });
-++++++
-++++++  it('should return the sum of a positive and a negative number', () => {
-++++++    expect(sum(5, -3)).toBe(2);
-++++++  });
-++++++
-++++++  it('should return the sum of two negative numbers', () => {
-++++++    expect(sum(-4, -6)).toBe(-10);
-++++++  });
-++++++
-++++++  it('should return the sum of a number and zero', () => {
-++++++    expect(sum(7, 0)).toBe(7);
-++++++  });
-++++++
-++++++  it('should return zero when adding zero and zero', () => {
-++++++    expect(sum(0, 0)).toBe(0);
-++++++  });
-++++++});
-++++\ No newline at end of file
-+++\ No newline at end of file
-++\ No newline at end of file
-+\ No newline at end of file
+@@ -1,33 +1,144 @@
+-@@ -0,0 +1,31 @@
+-+@@ -0,0 +1,29 @@
+-++@@ -0,0 +1,27 @@
+-+++@@ -0,0 +1,25 @@
+-++++@@ -0,0 +1,24 @@
+-+++++import { describe, it, expect } from 'vitest';
+-+++++import { sum } from './sum';
+-+++++
+-+++++describe('sum', () => {
+-+++++  it('should return the sum of two positive numbers', () => {
+-+++++    expect(sum(1, 2)).toBe(3);
+-+++++  });
+-+++++
+-+++++  it('should return the sum of a positive and a negative number', () => {
+-+++++    expect(sum(5, -3)).toBe(2);
+-+++++  });
+-+++++
+-+++++  it('should return the sum of two negative numbers', () => {
+-+++++    expect(sum(-4, -6)).toBe(-10);
+-+++++  });
+-+++++
+-+++++  it('should return the sum of a number and zero', () => {
+-+++++    expect(sum(7, 0)).toBe(7);
+-+++++  });
+-+++++
+-+++++  it('should return zero when adding zero and zero', () => {
+-+++++    expect(sum(0, 0)).toBe(0);
+-+++++  });
+-+++++});
+-+++\ No newline at end of file
+-++\ No newline at end of file
+-+\ No newline at end of file
++@@ -1,31 +1,112 @@
++-@@ -0,0 +1,29 @@
++-+@@ -0,0 +1,27 @@
++-++@@ -0,0 +1,25 @@
++-+++@@ -0,0 +1,24 @@
++-++++import { describe, it, expect } from 'vitest';
++-++++import { sum } from './sum';
++-++++
++-++++describe('sum', () => {
++-++++  it('should return the sum of two positive numbers', () => {
++-++++    expect(sum(1, 2)).toBe(3);
++-++++  });
++-++++
++-++++  it('should return the sum of a positive and a negative number', () => {
++-++++    expect(sum(5, -3)).toBe(2);
++-++++  });
++-++++
++-++++  it('should return the sum of two negative numbers', () => {
++-++++    expect(sum(-4, -6)).toBe(-10);
++-++++  });
++-++++
++-++++  it('should return the sum of a number and zero', () => {
++-++++    expect(sum(7, 0)).toBe(7);
++-++++  });
++-++++
++-++++  it('should return zero when adding zero and zero', () => {
++-++++    expect(sum(0, 0)).toBe(0);
++-++++  });
++-++++});
++-++\ No newline at end of file
++-+\ No newline at end of file
+++@@ -1,29 +1,83 @@
+++-@@ -0,0 +1,27 @@
+++-+@@ -0,0 +1,25 @@
+++-++@@ -0,0 +1,24 @@
+++-+++import { describe, it, expect } from 'vitest';
+++-+++import { sum } from './sum';
+++-+++
+++-+++describe('sum', () => {
+++-+++  it('should return the sum of two positive numbers', () => {
+++-+++    expect(sum(1, 2)).toBe(3);
+++-+++  });
+++-+++
+++-+++  it('should return the sum of a positive and a negative number', () => {
+++-+++    expect(sum(5, -3)).toBe(2);
+++-+++  });
+++-+++
+++-+++  it('should return the sum of two negative numbers', () => {
+++-+++    expect(sum(-4, -6)).toBe(-10);
+++-+++  });
+++-+++
+++-+++  it('should return the sum of a number and zero', () => {
+++-+++    expect(sum(7, 0)).toBe(7);
+++-+++  });
+++-+++
+++-+++  it('should return zero when adding zero and zero', () => {
+++-+++    expect(sum(0, 0)).toBe(0);
+++-+++  });
+++-+++});
++++@@ -1,27 +1,55 @@
++++-@@ -0,0 +1,25 @@
++++-+@@ -0,0 +1,24 @@
++++-++import { describe, it, expect } from 'vitest';
++++-++import { sum } from './sum';
++++-++
++++-++describe('sum', () => {
++++-++  it('should return the sum of two positive numbers', () => {
++++-++    expect(sum(1, 2)).toBe(3);
++++-++  });
++++-++
++++-++  it('should return the sum of a positive and a negative number', () => {
++++-++    expect(sum(5, -3)).toBe(2);
++++-++  });
++++-++
++++-++  it('should return the sum of two negative numbers', () => {
++++-++    expect(sum(-4, -6)).toBe(-10);
++++-++  });
++++-++
++++-++  it('should return the sum of a number and zero', () => {
++++-++    expect(sum(7, 0)).toBe(7);
++++-++  });
++++-++
++++-++  it('should return zero when adding zero and zero', () => {
++++-++    expect(sum(0, 0)).toBe(0);
++++-++  });
++++-++});
+++++@@ -1,25 +1,27 @@
+++++-@@ -0,0 +1,24 @@
+++++-+import { describe, it, expect } from 'vitest';
+++++-+import { sum } from './sum';
+++++-+
+++++-+describe('sum', () => {
+++++-+  it('should return the sum of two positive numbers', () => {
+++++-+    expect(sum(1, 2)).toBe(3);
+++++-+  });
+++++-+
+++++-+  it('should return the sum of a positive and a negative number', () => {
+++++-+    expect(sum(5, -3)).toBe(2);
+++++-+  });
+++++-+
+++++-+  it('should return the sum of two negative numbers', () => {
+++++-+    expect(sum(-4, -6)).toBe(-10);
+++++-+  });
+++++-+
+++++-+  it('should return the sum of a number and zero', () => {
+++++-+    expect(sum(7, 0)).toBe(7);
+++++-+  });
+++++-+
+++++-+  it('should return zero when adding zero and zero', () => {
+++++-+    expect(sum(0, 0)).toBe(0);
+++++-+  });
+++++-+});
+++ +\ No newline at end of file
++++++@@ -0,0 +1,25 @@
+++++++@@ -0,0 +1,24 @@
++++++++import { describe, it, expect } from 'vitest';
++++++++import { sum } from './sum';
++++++++
++++++++describe('sum', () => {
++++++++  it('should return the sum of two positive numbers', () => {
++++++++    expect(sum(1, 2)).toBe(3);
++++++++  });
++++++++
++++++++  it('should return the sum of a positive and a negative number', () => {
++++++++    expect(sum(5, -3)).toBe(2);
++++++++  });
++++++++
++++++++  it('should return the sum of two negative numbers', () => {
++++++++    expect(sum(-4, -6)).toBe(-10);
++++++++  });
++++++++
++++++++  it('should return the sum of a number and zero', () => {
++++++++    expect(sum(7, 0)).toBe(7);
++++++++  });
++++++++
++++++++  it('should return zero when adding zero and zero', () => {
++++++++    expect(sum(0, 0)).toBe(0);
++++++++  });
++++++++});
++++++\ No newline at end of file
++++ \ No newline at end of file
+++ \ No newline at end of file
++ \ No newline at end of file
+ \ No newline at end of file
 \ No newline at end of file
\ No newline at end of file