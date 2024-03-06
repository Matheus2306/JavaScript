// var populaA = 100003;
// var populaB = 300004;
// var ano = 0;

// while (populaA < populaB) {
//   ano++;
//   populaA *= 1.03;
//   populaB *= 1.015;
// }

// console.log(
//   `A população A (${Math.round(
//     populaA
//   )}) vai passar a população B (${Math.round(populaB)}) em ${ano} anos `
// );
// console.log("============");

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorX = "X";
let jogadorO = "O";

for (let i = 0; i < 9; i++) {
  function jogar(jogador) {
    let linha, coluna;
    do {
      linha = Math.floor(Math.random() * 3);
      coluna = Math.floor(Math.random() * 3);
    } while (tabuleiro[linha][coluna] !== " ");

    tabuleiro[linha][coluna] = jogador;
  }
  jogar(jogadorO);
  jogar(jogadorX);
}
console.table(tabuleiro);