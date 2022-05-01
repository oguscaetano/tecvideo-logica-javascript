function insertionSort1(n, arr) {
  // Write your code here
  for (let index = 1; index < arr.length; index += 1) {
    // First, choose the element at index 1
    let current = arr[index];
    let compare;

    // Loop from right to left, starting from index-1 to index 0
    for (compare = index - 1; compare >= 0 && arr[compare] > current; compare -= 1) {
      // as long as arr[compare] is bigger than current
      // move arr[compare] to the right at arr[compare + 1]
      arr[compare + 1] = arr[compare];
    }
    // Place the current element at index 0
    // or next to the smaller element
    arr[compare + 1] = current;
    console.log(...arr);
  }
  return arr;
}

console.log(insertionSort1(5, [1, 4, 3, 5, 6, 2]));
// 1 4 3 5 6 2
// 1 3 4 5 6 2
// 1 3 4 5 6 2
// 1 3 4 5 6 2
// 1 2 3 4 5 6