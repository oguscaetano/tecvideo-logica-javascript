// Desenvolva um algoritmo para calcular o peso ideal de uma pessoa.
// O peso ideal de um adulto pode ser calculado a partir das fórmulas:
// 22 * altura2 (para homens)
// 21 * altura2 (para mulheres)

let altura = 1.53;
let sexo = 'Feminino';
let pesoIdeal = 0;

if(sexo === 'Masculino'){
  pesoIdeal = 22 * Math.pow(altura, 2);
} else {
  pesoIdeal = 21 * Math.pow(altura, 2);
}

console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(3)} Kg`);