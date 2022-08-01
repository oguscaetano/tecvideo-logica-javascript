let alturas = [];
function criaPessoa (num) {
  for(let index = 0; index < num; index += 1){
    alturas.push((Math.random() * (2.5 - 1.3) + 1.3));
  }
};

criaPessoa(10);

// console.log(alturas);
// console.log((Math.random() * (2.5 - 1.3) + 1.3).toFixed(2));

let soma = 0;
alturas.forEach((altura) => soma += altura);

const media = (soma / alturas.length);

// console.log(soma);

let menorMedia = 0;
alturas.forEach((altura) => {
  if(altura < media) menorMedia += 1; 
});

console.log(`Menor altura: ${(alturas.sort()[0]).toFixed(2)}`);
console.log(`Maior altura: ${(alturas.sort((a, b) => b - a)[0]).toFixed(2)}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Quantidade de pessoas com altura menor que a média: ${menorMedia}`);