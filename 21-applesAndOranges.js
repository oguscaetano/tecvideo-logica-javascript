function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let applesCount = 0;
  let orangesCount = 0;

  apples.forEach((apple) => {
    if((apple + a) >= s && (apple + a) <= t){
      applesCount += 1;
    }
  });

  oranges.forEach((orange) => {
    if((orange + b) <= t && (orange + b) >= s){
      orangesCount += 1;
    }
  });

  console.log(applesCount);
  console.log(orangesCount);
};

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
// 1
// 2