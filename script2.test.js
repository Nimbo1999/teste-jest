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