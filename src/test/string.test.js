const {
  capitalize, reverseString,
} = require('./../lib/string');

describe('capitalize string', () => {
  it('throw error for empty string', () =>
    expect(() => capitalize('')).toThrow(TypeError));

  it('results with single string', () => expect(capitalize('a')).toBe('A'));

  it('returns with sentence', () =>
    expect(capitalize('this test for a sentence.')).toBe(
      'This test for a sentence.'
    ));

  it('throw error for number not string', () =>
    expect(() => capitalize(123)).toThrow(TypeError));
});

describe('reverse string', () => {
  it('throw error for empty string', () =>
    expect(() => reverseString('')).toThrow(TypeError));

  it('results with single string', () => expect(reverseString('A')).toBe('A'));

  it('returns with sentence', () =>
    expect(reverseString('Hello Hey.')).toBe('.yeH olleH'));

  it('throw error for number not string', () =>
    expect(() => reverseString(123)).toThrow(TypeError));
});
