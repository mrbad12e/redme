import { describe, test, expect } from 'bun:test';
import stringLengthFrequency from './solution.js';

describe('stringLengthFrequency', () => {
  test('returns strings with the most frequent length', () => {
    const input = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
    const result = stringLengthFrequency(input);
    expect(result).toEqual(['ab', 'cd', 'gh']);
  });

  test('returns empty array for empty input', () => {
    expect(stringLengthFrequency([])).toEqual([]);
  });

  test('returns empty array for null input', () => {
    expect(stringLengthFrequency(null)).toEqual([]);
  });

  test('returns the only string when array has one element', () => {
    expect(stringLengthFrequency(['hello'])).toEqual(['hello']);
  });

  test('returns all strings when all have the same length', () => {
    const input = ['a', 'b', 'c'];
    expect(stringLengthFrequency(input)).toEqual(['a', 'b', 'c']);
  });

  test('handles strings with length 1', () => {
    const input = ['x', 'y', 'ab', 'cd'];
    expect(stringLengthFrequency(input)).toEqual(['x', 'y']);
  });

  test('returns correct order preserving results', () => {
    const input = ['dog', 'cat', 'bird', 'fish'];
    expect(stringLengthFrequency(input)).toEqual(['dog', 'cat']);
  });
});
