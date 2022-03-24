function bigSorting(unsorted) {
  // Write your code here
  //  return unsorted.sort((a, b) => a - b);
  // return unsorted.sort((a, b) => (BigInt(a) > BigInt(b) ? 0 : -1));
  unsorted.sort((a, b) => {
    if(a.length === b.length) {
      return a > b ? 1 : -1;
    }
    return a.length - b.length;
  })
  return unsorted;
}

console.log(bigSorting(['1', '200', '150', '3']));
//['1', '3', '150', '200']