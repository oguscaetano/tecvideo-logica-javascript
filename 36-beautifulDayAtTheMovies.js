function beautifulDays(i, j, k) {
  // Write your code here
  let reverse = 0;
  let count = 0;

  for(let index = i; index <= j; index += 1) {
    reverse = Number(String(index).split('').reverse().join(''));
    if(Number.isInteger(Math.abs(index - reverse) / k) === true) {
      count += 1;
    }
  }

  return count;
}

console.log(beautifulDays(20, 23, 6));
// 2