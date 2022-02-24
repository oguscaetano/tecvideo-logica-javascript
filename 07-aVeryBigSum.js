function aVeryBigSum(ar) {
  // Write your code here
  let soma = 0;
  for(let index = 0; index < ar.length; index += 1) {
    soma = soma + ar[index];
  }
  return soma;
}

console.log(aVeryBigSum([10, 20, 30, 40, 50]));
