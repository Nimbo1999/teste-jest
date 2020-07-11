const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'devlopes.dev',
  'gmail.com',
  'woocommerce.com',
  'reactjs.org',
  'reactnative.dev',
  'myfavoritecat.com',
  'dragonball.com',
  'catssuperdragonball.com',
  'ilikenetflix.com',
  'ilikecatflix.com',
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput);
  });

  return matches.length > 3 ? matches.slice(0, 3) : matches;
}

module.exports = { googleSearch, googleDatabase };