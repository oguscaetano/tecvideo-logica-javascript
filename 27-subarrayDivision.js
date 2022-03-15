function birthday(s, d, m) {
  // Write your code here
  let count = 0;
  let sum = 0;
  for(let index = 0; index <= (s.length - m); index += 1){
    for(let index2 = 0; index2 < m; index2 += 1){
      sum = sum + s[index + index2];
    }
    if(sum === d){
      count += 1;
    }
    sum = 0;
  }
  return count;
};

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
// 2