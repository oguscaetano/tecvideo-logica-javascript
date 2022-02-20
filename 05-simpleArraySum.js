function simpleArraySum(ar) {
  let soma = 0;
  for(let index = 0; index < ar.length; index += 1) {
    soma = soma + ar[index];
  }
  return soma;
};

console.log(simpleArraySum([1, 2, 3, 10]));