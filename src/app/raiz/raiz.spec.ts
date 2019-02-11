import { raiz } from './raiz';

describe('division', () => {
  it('it should returns the square root of a number', () => {
    expect(raiz(16)).toBe(4);
  });
  it('it should returns NaN of a negative number', () => {
    expect(raiz(-4)).toBeNaN();
  });
  it('it should returns 0 of a number 0', () => {
    expect(raiz(0)).toBe(0);
  });
  it('it should returns 1 of a number 1', () => {
    expect(raiz(1)).toBe(1);
  });
  it('it should returns 1.4142135623730951 of a number 2', () => {
    expect(raiz(2)).toBe(1.4142135623730951);
  });
  it('it should returns 3 of a number 9', () => {
    expect(raiz(9)).toBe(3);
  });

})
