function findDigits(n) {
  // Write your code here
  let arr = n.toString().split('');
  let count = 0;

  for(let index = 0; index < arr.length; index += 1) {
    if(Number.isInteger(n / arr[index])) {
      count += 1;
    }
  }

  return count;
}

console.log(findDigits(1012));
// 3