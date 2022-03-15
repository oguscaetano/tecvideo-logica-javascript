function formingMagicSquare(s) {
  // Write your code here
  let magicSquares = [
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
  ];

  let maxValue = Number.MAX_VALUE;
  for(let index = 0; index < magicSquares.length; index += 1){
    let min = 0;
    for(let line = 0; line < s.length; line += 1){
      for(let column = 0; column < s.length; column += 1){
        min += Math.abs(s[line][column] - magicSquares[index][line][column]);
      }
    }
    maxValue = Math.min(maxValue, min);
  }
  return maxValue;
}

console.log(formingMagicSquare([
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2]]));

// 7