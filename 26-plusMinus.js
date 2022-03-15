function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for(let index = 0; index < arr.length; index += 1){
    if(arr[index] > 0){
      positive += 1;
    } else if(arr[index] < 0){
      negative += 1;
    } else {
      zero += 1;
    }
  }
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
};

plusMinus([1, 1, 0, -1, -1]);