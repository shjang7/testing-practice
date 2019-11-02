const analyze = require('./../lib/array');

const numbers = [1, 8, 3, 4, 2, 6];
const mixedArray = [1, 8, '3', 4, 2, 6];
const emptyArray = [];
const nonArray = '1 8 3';

describe('array analyzis', () => {
  it('gets object which including min, max, length, average', () =>
    expect(analyze(numbers)).toEqual({
      min: 1,
      max: 8,
      length: 6,
      average: 4,
    }));

  it('throw error for empty array', () =>
    expect(() => analyze(emptyArray)).toThrow(TypeError));

  it('throw error when array included not only numbers', () =>
    expect(() => analyze(mixedArray)).toThrow(TypeError));

  it('throw error for non array', () =>
    expect(() => analyze(nonArray)).toThrow(TypeError));
});
