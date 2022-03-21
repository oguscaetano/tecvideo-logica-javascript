function encryption(s) {
  let string = s.split('');
  let column = Math.ceil(Math.sqrt(string.length));
  let result = [];

  for(let index = 0; index < column; index += 1){
    let char = index;
    let str = '';
    while(char < string.length){
      str += string[char];
      char += column;
    }
    result.push(str);
  }

  return result.join(' ');
}

console.log(encryption('haveaniceday'));
