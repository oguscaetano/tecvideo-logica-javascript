function getZarr(str, strLength, zArray) {
  let left = 0;
  let right = 0;
  let k = 0;

  // [left, right] make a window which matches
  // with prefix of s
  // left = right = 0;
  for (let index = 1; index < strLength; index += 1) {

    // if index>right nothing matches so
    // we will calculate.
    // zArray[index] using naive way.
    if (index > right) {
      left = right = index;

      // right-left = 0 in starting, so it will start
      // checking from 0'th index. For example,
      // for "ababab" and index = 1, the value of right
      // remains 0 and zArray[index] becomes 0. For string
      // "aaaaaa" and index = 1, zArray[index] and right become 5
      while (right < strLength && str[right - left] === str[right]){
        right += 1;
      }
        
      zArray[index] = right - left;
      right -= 1;
    } else {

      // k = index-left so k corresponds
      // to number which
      // matches in [left, right] interval.
      k = index - left;

      // if zArray[k] is less than
      // remaining interval
      // then zArray[index] will be equal to zArray[k].
      // For example, str = "ababab",
      // index = 3, right = 5
      // and left = 2
      if (zArray[k] < right - index + 1) {
        zArray[index] = zArray[k];
        // For example str = "aaaaaa"
        // and index = 2, right is 5,
        // left is 0
      } else {
        // else start from right and
        // check manually
        left = index;

        while (right < strLength && str[right - left] === str[right]){
          right += 1;
        };

        zArray[index] = right - left;
        right -= 1;
      }
    }
  }
}

// Function to return the similarity sum
function stringSimilarity(s) {
  let zArray = new Array(s.length);
  // console.log(zArray);

  // Compute the zArray-array for the given string
  getZarr(s, s.length, zArray);

  let total = s.length;

  // Summation of the zArray-values
  for (let index = 1; index < s.length; index += 1){
    total += zArray[index];
  }

  return total;
}

console.log((stringSimilarity("ababaa")));
