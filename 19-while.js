// let contador = 0;
// while (contador < 5) {
//   console.log(contador);
//   contador++;
// }
// var x = 11;
// while (x > 10) {
//   console.log(`Entrei no laço While...`);
//   x--;
// }
// console.log(`terminei`);
// console.log("================")
// var limite = 500;
// var fatura = 0;

// while (fatura <= limite) {
//   let gasto = Math.random() * 100;
//   fatura += gasto;
//   console.log(
//     `gastei R$${gasto.toFixed(2)}------ Fatura: R$${fatura.toFixed(2)}`
//   );
//   fatura > limite && console.log(`estourou o limite do cartão `);
// }
// console.log("================")

// var limite = 500;
// var fatura = 0;
// do {
//   let gasto = Math.random() * 100;
//   fatura += gasto;
//   console.log(
//     `gastei R$${gasto.toFixed(2)}------ Fatura: R$${fatura.toFixed(2)}`
//   );
//   fatura > limite && console.log(`estourou o limite do cartão `);
// } while (fatura <= limite);
//console.log("================")

//jogo cara ou coroa

var rodada = 1;
var moeda = "";
var escolhajogador = "";
var vitoria = 0;
var derrota = 0;

while (rodada <= 3) {
  moeda = Math.random() >= 0.5 ? "cara " : "coroa";
  escolhajogador = Math.random() >= 0.5 ? "cara" : "coroa";
  if (escolhajogador == moeda) {
    console.log(
      `Parabéns, você escolheu ${escolhajogador} e caiu ${moeda}, você ganhou!`
    );
    vitoria++;
  } else {
    console.log(
      `Que pena, você escolheu ${escolhajogador} e caiu ${moeda},você perdeu!`
    );
    derrota++;
  }
  rodada++;
}

console.log("================");
console.log(`     placar     `);
console.log("================");
console.log(` ${vitoria > derrota ? " você ganhou" : " você perdeu"}`);
console.log("================");
