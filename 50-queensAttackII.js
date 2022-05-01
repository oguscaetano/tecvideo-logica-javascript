function queensAttack(n, k, r_q, c_q, obstacles) {
  let top = n - r_q;
  let right = n - c_q;
  let bottom = r_q - 1;
  let left = c_q - 1;

  let topLeft = Math.min(top, left);
  let topRight = Math.min(top, right);
  let bottomRight = Math.min(bottom, right);
  let bottomLeft = Math.min(bottom, left);

  obstacles.forEach(([line, column]) => {

    //left
    if(line === r_q && column < c_q){
      left = Math.min(left, (Math.abs(c_q - column) - 1));
    }

    //top
    if(column === c_q && line > r_q){
      top = Math.min(top, (Math.abs(line - r_q) - 1));
    }

    //right
    if(line === r_q && column > c_q){
      right = Math.min(right, (Math.abs(column - c_q) - 1));
    }

    //bottom
    if(column === c_q && line < r_q){
      bottom = Math.min(bottom, (Math.abs(r_q - line) - 1));
    }

    //topLeft
    if(line > r_q && column < c_q && (Math.abs(r_q - line) === Math.abs(c_q - column))){
      topLeft = Math.min(topLeft, (Math.abs(r_q - line) - 1));
    }

    //topRight
    if(line > r_q && column > c_q && (Math.abs(line - r_q) === Math.abs(c_q - column))){
      topRight = Math.min(topRight, (Math.abs(line - r_q) - 1));
    }

    //bottomRight
    if(line < r_q && column > c_q && (Math.abs(line - r_q) === Math.abs(c_q - column))){
      bottomRight = Math.min(bottomRight, (Math.abs(line - r_q) - 1));
    }

    //bottomLeft
    if(line < r_q && column < c_q && (Math.abs(r_q - line) === Math.abs(column - c_q))){
      bottomLeft = Math.min(bottomLeft, (Math.abs(r_q - line) - 1));
    }
  });

  return (top + right + bottom + left + topRight + topLeft + bottomRight + bottomLeft);

}

console.log(queensAttack(4, 0, 4, 4, []));
console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]]));
console.log(queensAttack(8, 0, 4, 4, []));
console.log(queensAttack(8, 1, 4, 4, [[3, 5]]));
console.log(queensAttack(8, 8, 4, 4, [[3, 5], [6, 6], [7, 4], [7, 1], [4, 2], [2, 2], [1, 4], [4, 7]]));
// 9
// 10
// 27
// 24
// 11


