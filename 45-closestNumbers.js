function closestNumbers(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let result = [];

  let minDiff = arr[1] - arr[0];
  for(let index = 2; index < arr.length; index += 1) {
    minDiff = Math.min(minDiff, arr[index] - arr[index - 1]);
  }

  for(let index = 1; index < arr.length; index += 1) {
    if(arr[index] - arr[index - 1] === minDiff) {
      result.push(arr[index - 1], arr[index]);
    }
  }
  
  return result;

}

console.log(closestNumbers([5, 4, 3, 2]));
console.log(closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470]));
// [ 2, 3, 3, 4, 4, 5 ]
// [ -520, -470, -20, 30 ]