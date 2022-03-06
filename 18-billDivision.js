function bonAppetit(bill, k, b) {
  // Write your code here
  let sum = 0;
  let final = 0;

  bill.forEach(price => sum += price);
  sum = sum - bill[k];
  final = sum / 2;
  if(final != b){
    console.log(b - final);
  } else {
    console.log(`Bon Appetit`);
  }
}

bonAppetit([72, 53, 60, 66, 90, 62, 12, 31, 36, 94], 6, 288);
// 5