function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let sum = 0;
  for(let index = 0; index < n; index += 1){
    for(let pair = 0; pair < n; pair += 1){
      if(index != pair){
        if((ar[index] + ar[pair]) % k === 0){
          sum += 1;
        }
      }
    }
  };
  return sum / 2;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
// 5