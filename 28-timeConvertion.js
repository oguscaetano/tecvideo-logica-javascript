function timeConversion(s) {
  s.split('');

  let hours = parseInt(s[0] + s[1]);
  let minutes = s[3] + s[4];
  let seconds = s[6] + s[7];
  let ampm = s[s.length - 2];

  if(hours >= 12 && ampm === 'A'){
    hours = hours - 12;
  } else if(hours < 12 && ampm === 'P'){
    hours = hours + 12;
  }

  if(hours < 10){
    return (`0${hours}:${minutes}:${seconds}`);
  } else {
    return (`${hours}:${minutes}:${seconds}`);
  }
}

console.log(timeConversion('06:40:03AM'));
console.log(timeConversion('07:05:45PM'));
//19:05:45