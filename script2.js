const getPeople = fetch => {
  return fetch('https://swapi.py4e.com/api/people')
  .then(resp => resp.json())
  .then(data => ({
      count: data.count,
      results: data.results
    })
  );
}

module.exports = getPeople;