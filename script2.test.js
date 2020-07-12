const fetch = require('node-fetch');
const swapi = require('./script2');

describe('Swapi API Test Call', () => {

  it('Test count with done callback', done => {
    expect.assertions(1);
    swapi(fetch).then(data => {
      expect(data.count).toBe(87);
      done();
    });
  });

  it('Test count with return', () => {
    expect.assertions(1);
    return swapi(fetch).then(data => {
      expect(data.count).toBe(87);
    });
  });

  it('Test the length of results property', () => {
    expect.assertions(1);
    return swapi(fetch).then(data => {
      expect(data.results.length).toBeGreaterThan(9);
    });
  });

});

describe('Test with mock data', () => {

  it('getPeople return count and result', () => {

    const mochFetch = jest.fn()
      .mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        })
      }));

    expect.assertions(4);
    return swapi(mochFetch).then(data => {
      expect(mochFetch.mock.calls.length).toBe(1);
      expect(mochFetch).toBeCalledWith('https://swapi.py4e.com/api/people');
      expect(data.count).toBe(87);
      expect(data.results.length).toBeGreaterThan(9);
    });
    
  });

});