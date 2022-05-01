function insertionSort1(n, arr) {
  // Write your code here
  // let n = inputArr.length;
    for (let index = 1; index < arr.length; index += 1) {
        // Choosing the first element in our unsorted subarray
        let current = arr[index];
        // The last element of our sorted subarray
        let compare = index - 1; 
        while ((compare > -1) && (current < arr[compare])) {
            arr[compare + 1] = arr[compare];
            compare -= 1;
            console.log(...arr);
        }
        arr[compare + 1] = current;
    }
    console.log(...arr);
}

console.log(insertionSort1(5, [3, 4, 7, 5, 6, 2, 1]));
// 3 4 7 7 6 2 1
// 3 4 5 7 7 2 1
// 3 4 5 6 7 7 1
// 3 4 5 6 6 7 1
// 3 4 5 5 6 7 1
// 3 4 4 5 6 7 1
// 3 3 4 5 6 7 1
// 2 3 4 5 6 7 7
// 2 3 4 5 6 6 7
// 2 3 4 5 5 6 7
// 2 3 4 4 5 6 7
// 2 3 3 4 5 6 7
// 2 2 3 4 5 6 7
// 1 2 3 4 5 6 7