import {sum, homeLabel} from './functions.js';

describe('Function sum', () => {
  it('should return sum', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('Function homeLabel', () => {
  it('should return label', () => {
    expect(homeLabel()).toBe('Home page from function');
  });
});
