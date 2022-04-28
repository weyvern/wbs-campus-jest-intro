import isPhoneNumber from '../phone.js';

describe('Is Phone number', () => {
  it('Should accept +4915207204102', () => {
    expect(isPhoneNumber('+4915207204102')).toBe(true);
  });
  it('Should accept 015207204102', () => {
    expect(isPhoneNumber('015207204102')).toBe(true);
  });
  it('Should accept 004915207204102', () => {
    expect(isPhoneNumber('004915207204102')).toBe(true);
  });
  it('Should accept 0152 0720 4102', () => {
    expect(isPhoneNumber('0152 0720 4102')).toBe(true);
  });
  it('Should return false for falsy non-number values', () => {
    const falsyValues = [null, NaN, undefined, ''];
    falsyValues.forEach(value => expect(isPhoneNumber(value)).toBe(false));
  });
});
