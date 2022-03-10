function gradingStudents(grades) {
  // Write your code here
  for(let index = 0; index < grades.length; index += 1){
    if(grades[index] >= 38){
      if(grades[index] % 5 === 3){
        grades[index] += 2;
      } else if(grades[index] % 5 === 4){
        grades[index] += 1;
      }
    }
  }
  return grades;
};

console.log(gradingStudents([73, 67, 38, 33]));
// [ 75, 67, 40, 33 ]