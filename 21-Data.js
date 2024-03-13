//criando objetos com data
var data1 = new Date();
console.log(data1);

//criando um objeto com data especifica date()
var data2 = new Date("2005-05-12");
console.log(data2);

//extraindo partes de uma data
var data3 = new Date("2008=03-16");
console.log(`Data : ${data3}`);
console.log(`Ano: ${data3.getFullYear()}`);
console.log(`mes: ${data3.getMonth() + 1}`);
console.log(`dia: ${data3.getDate()}`);

const mes = [
  " janeiro",
  "fevereiro",
  "marco",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "desembro",
];

console.log(`retornando o mês por escrito!`);
console.log(`mês: ${mes[data3.getMonth()]}`);

const semana = [
  "domingo",
  "segunda",
  "terca",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];
console.log(`Dia: ${semana[data3.getDay()]}`);
const idade = data1.getTime() - data3.getTime();
const diferenca=Math.floor(idade/(1000*60*60*24*365.25))
console.log(diferenca);

// //outra forma
// console.log(" ===============================");
// const dataNasc = new Date("2007=03-14");
// const dataAtual = new Date();


// const diferenca = dataAtual.getTime() - dataNasc.getTime();
// //console.log(`Diferença: ${diferenca}`);
// const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
// console.log(`Idade: ${idade}`);


// console.log("==============")


// const diferencaAnos = dataAtual.getFullYear() - dataNasc.getFullYear();
// console.log(`Diferença em anos: ${diferencaAnos}`);


// if(dataAtual.getMonth() < dataNasc.getMonth() || 
//   (dataAtual.getMonth() === dataNasc.getMonth() && 
//   dataAtual.getDate() < dataNasc.getDate())){
//     console.log(`Ainda não fez aniversário!`);
//     console.log(`Idade: ${diferencaAnos - 1}`);
// }