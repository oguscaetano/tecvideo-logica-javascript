function extraLongFactorials(n) {
  // Write your code here
  n = BigInt(n);
  let num = BigInt(1);
  for(let index = n; index > 1; index --){
    num *= index; 
  }

  console.log(num.toString());
};

extraLongFactorials(25);
//15511210043330985984000000