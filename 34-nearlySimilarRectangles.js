function nearlySimilarRectangles(sides) {
  // Write your code here
  let sum = 0;
  let x, y = 0;
  sides.map((side, index) => {
    x = side[0];
    y = side[1];
    for(let index2 = index + 1; index2 < sides.length; index2 += 1) {
      if(x / sides[index2][0] === y / sides[index2][1]) {
        sum += 1;
      }
    }
  });
  return sum;
}

console.log(nearlySimilarRectangles([
  [4, 8], 
  [15, 30], 
  [25, 50]]));

//3