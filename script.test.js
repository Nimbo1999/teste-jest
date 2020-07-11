const { googleSearch, googleDatabase } = require('./script');

it('HelloWord of tests!', () => {
  expect('hello').toBe('hello');
});

describe('googleSeatch function', () => {
  it('it is my googleSearch function', () => {
    expect(googleSearch('te', googleDatabase)).toEqual(['myfavoritecat.com']);
  });
  
  it('expect to googleSearch work with null or undefined on 1 parameter.', () => {
    expect(googleSearch(undefined, googleDatabase)).toEqual([]);
    expect(googleSearch(null, googleDatabase)).toEqual([]);
  });
  
  it('expect to googleSearch not work with null or undefined on 2 parameter.', () => {
    expect(() => googleSearch(undefined)).toThrow();
    expect(() => googleSearch()).toThrow();
    expect(() => googleSearch(null)).toThrow();
    expect(() => googleSearch('la')).toThrow();
  });
  
  it('it does not return more than 3 matches!', () => {
    expect(googleSearch('cat', googleDatabase).length).toBe(3);
    expect(googleSearch('cat', googleDatabase).length).not.toBe(2);
    expect(googleSearch('cat', googleDatabase).length).toBeLessThan(4);
    expect(googleSearch('.com', googleDatabase).length).toBeLessThan(4);
  });
});
