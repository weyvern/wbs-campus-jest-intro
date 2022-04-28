import { add, substract, multiply, divide, percentage, factorial, fibonacci, a } from '../utils.js';

describe('Utils', () => {
  describe('Add', () => {
    it('Should throw an error if value passed is not a number', () => {
      expect(() => add('a', NaN)).toThrow();
    });
    it('Should not add two integer numbers together incorrectly', () => {
      const result = add(2, 2);
      expect(result).not.toBe(0);
    });
    it('Should add two integer numbers together correctly', () => {
      const result = add(1, 2);
      expect(result).toBe(3);
    });
    it('Should add two decimal numbers together correctly', () => {
      const result = add(0.1, 0.2);
      expect(result).toBeCloseTo(0.3);
    });
  });

  describe('Substract', () => {
    it('Should throw an error if value passed is not a number', () => {
      expect(() => substract('a', NaN)).toThrow();
    });
    it('Should substract one number from another', () => {
      const result = substract(2, 1);
      expect(result).toBe(1);
    });
  });

  describe('Multiply', () => {
    it('Should throw an error if value passed is not a number', () => {
      expect(() => multiply('a', NaN)).toThrow();
    });
    it('Should multiply one number from another', () => {
      const result = multiply(2, 1);
      expect(result).toBe(2);
    });
  });
});
