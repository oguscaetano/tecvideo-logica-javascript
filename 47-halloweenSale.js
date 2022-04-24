function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let games = 0;
  
  while (s >= 0) {
    p = (p > m) ? p : m;
    s = s - p;
    if((p - d) < m) {
      p = m;
    } else {
      p = p - d;
    }
    games += 1;
  }
  return games - 1;
}

console.log(howManyGames(20, 3, 6, 80));
// 6