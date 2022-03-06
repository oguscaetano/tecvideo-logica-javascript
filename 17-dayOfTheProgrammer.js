function dayOfProgrammer(year) {
  // Write your code here
  if(year >= 1700 && year <= 2700){

    //calendario juliano
    if(year >= 1700 && year <= 1917){
      if(year % 4 === 0){
        return `12.09.${year}`;
      } else {
        return `13.09.${year}`;
      }
    };

    //1918
    if(year === 1918){
      return `26.09.${year}`;
    }

    //calendario gregoriano
    if((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)){
        return `12.09.${year}`;
    } else {
        return `13.09.${year}`;
      };

  } else {
    return `Please, input a year between 1700 and 2700.`;
  }
}

console.log(dayOfProgrammer(1918));
//12.09.1700