function sockMerchant(n, ar) {
  // Write your code here
  let count = 0;
  let obj = {};

  for(let index of ar) {
    obj[index] += 1 || 1;
  }

  for(let index of ar) {
    obj[index] = obj[index] % 2 === 0;
    count += obj[index];
  }

  return count;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2, 2]));
// 2 