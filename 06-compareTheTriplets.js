function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  for(let index = 0; index < a.length; index += 1) {
    if(a[index] > b[index]){
      alice += 1;
    } else if(a[index] < b[index]){
      bob += 1;
    }
  };
  return [alice, bob];
};

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));