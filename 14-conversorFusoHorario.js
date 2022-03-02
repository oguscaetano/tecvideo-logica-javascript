// Sabendo que o fuso horário da França em relação ao Brasil é de +5 horas (no horário de verão na França), elaborar um programa que leia a hora no Brasil e informe a hora na França.

let horaBrasil = 22;
let minutos = 28;
let horaFranca = horaBrasil + 5;

// if(horaFranca > 24) {
//   horaFranca = horaFranca - 24;
// }

horaFranca > 24 ? horaFranca = horaFranca - 24 : horaFranca;


console.log(`Brasil: ${horaBrasil}:${minutos}
França: ${horaFranca}:${minutos}`);