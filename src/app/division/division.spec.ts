import { division } from './division';

describe('division', () => {
  it('it should include 2 numers', () => {
    expect(division(1,1)).toBe(1);
  });
  it('it should include 2 numers', () => {
    expect(division(1,2)).toBe(0.5);
  });
  it('it should include 2 numers', () => {
    expect(division(10,10)).toBe(1);
  });
  it('it should include 2 numers', () => {
    expect(division(10,3)).toBe(3.3333333333333335);
  });
  it('it should divide a number between 0', () =>{
    expect(division(1,0)).toBe(Infinity);
  });
  it('it should divide a 0 between any number', () =>{
    expect(division(0,2)).toBe(0);
  });
  it('it should divide a 0 between 0', () =>{
    expect(division(0,0)).toBeNaN();
  });

})
