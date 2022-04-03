function minimumDistances(a) {
  // Write your code here
  let pairs = [];

  for(let index = 0; index < a.length; index += 1) {
    for(let index2 = index + 1; index2 < a.length; index2 += 1) {
      if(a[index] === a[index2]) {
        pairs.push(index2 - index);
      }
    }
  }
  if(pairs.length != 0) {
    // return pairs.sort((a, b) => a - b)[0];
    return Math.min(...pairs);
  } else {
    return -1;
  }
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
console.log(minimumDistances([1, 2, 3, 4, 10]));
// 3
// -1