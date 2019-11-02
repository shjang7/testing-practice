const calculator = require('./../lib/calculator');

describe('calculator', () => {
  describe('add', () => {
    it('returns with two numbers input', () =>
      expect(calculator.add(1, 2)).toBe(3));

    it('returns itself for a number', () => expect(calculator.add(1)).toBe(1));

    it('calculates only first two numbers', () =>
      expect(calculator.add(1, 2, 5)).toBe(3));

    it('throw error with no numbers and array', () =>
      expect(() => calculator.add([], [])).toThrow(TypeError));

    it('throw error with no numbers and string', () =>
      expect(() => calculator.add('a', 'b')).toThrow(TypeError));
  });

  describe('subtract', () => {
    it('results with two numbers', () =>
      expect(calculator.subtract(2, 1)).toBe(1));

    it('returns itself for a number', () =>
      expect(calculator.subtract(2)).toBe(2));

    it('calculates only first two numbers', () =>
      expect(calculator.subtract(2, 1, 5)).toBe(1));

    it('throw error for no numbers', () =>
      expect(() => calculator.subtract('a', 'b')).toThrow(TypeError));
  });

  describe('multiply', () => {
    it('results with two numbers', () =>
      expect(calculator.multiply(2, 4)).toBe(8));

    it('returns itself for a number', () =>
      expect(calculator.multiply(2)).toBe(2));

    it('calculates only first two numbers', () =>
      expect(calculator.multiply(2, 4, 6)).toBe(8));

    it('throw error for no numbers', () =>
      expect(() => calculator.multiply('a', 'b')).toThrow(TypeError));
  });

  describe('divide', () => {
    it('results with two numbers', () =>
      expect(calculator.divide(10, 5)).toBe(2));

    it('returns rounded at 2 decimal point', () =>
      expect(calculator.divide(10, 3)).toBe(3.33));

    it('returns itself for a number', () =>
      expect(calculator.divide(10)).toBe(10));

    it('calculates only first two numbers', () =>
      expect(calculator.divide(10, 5, 3)).toBe(2));

    it('throw error for zero division', () =>
      expect(() => calculator.divide(10, 0)).toThrow(Error));

    it('throw error for no numbers', () =>
      expect(() => calculator.divide('a', 'b')).toThrow(TypeError));
  });
});
