function cutTheSticks(arr) {
  // Write your code here
  let min = 0;
  let count = 0;
  let result = [];

  for(let wow = 0 ; wow < arr.length; wow += 1) {
    let filtered = arr.filter((value) => value > 0);
    count = 0;
    min = filtered.sort((a, b) => a - b)[0];
    for(let index = 0; index < arr.length; index += 1) {
      if(arr[index] > 0) {
        arr[index] = arr[index] - min;
        count += 1;
      }
    }
    count > 0 && result.push(count);
  }
  return result;
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
// 6, 4, 2, 1