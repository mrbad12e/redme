import { describe, test, expect } from 'bun:test';
import sumOfTopTwoIntegers from './solution.js';

describe('sumOfTopTwoIntegers', () => {
  test('returns sum of two largest numbers', () => {
    const result = sumOfTopTwoIntegers([1, 4, 2, 3, 5]);
    expect(result).toBe(9);
  });

  test('returns sum with exactly 2 elements', () => {
    const result = sumOfTopTwoIntegers([10, 20]);
    expect(result).toBe(30);
  });

  test('handles negative numbers', () => {
    const result = sumOfTopTwoIntegers([-5, -1, -10, 3]);
    expect(result).toBe(2);
  });

  test('handles array with all negative numbers', () => {
    const result = sumOfTopTwoIntegers([-5, -2, -10]);
    expect(result).toBe(-7);
  });

  test('handles duplicate largest values', () => {
    const result = sumOfTopTwoIntegers([5, 5, 1, 2]);
    expect(result).toBe(10);
  });

  test('throws error for array with 1 element', () => {
    expect(() => sumOfTopTwoIntegers([5])).toThrow("Not enough elements");
  });

  test('throws error for empty array', () => {
    expect(() => sumOfTopTwoIntegers([])).toThrow("Not enough elements");
  });

  test('ignores smaller numbers correctly', () => {
    const result = sumOfTopTwoIntegers([100, 50, 25, 10, 5, 1]);
    expect(result).toBe(150);
  });
});