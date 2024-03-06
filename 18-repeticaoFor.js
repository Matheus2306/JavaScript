for (let i = 1; i < 1000; i += 2) {
  console.log(i);
}
// escreva todos os números de 1 - 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

console.log("===============");
//escreva todos os numeros pares
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

console.log("===============");
for (let i = 1; i <= 20; i++) {
  if (i % 2 != 1) {
    console.log(i);
  }
}
console.log("===============");

const num = [5, 6, 8, 14, 0, 9, 7, 2];
var somar = 0;
for (let i = 0; i < num.length; i++) {
  somar += num[i];
}
console.log(`a soma dos itens do array é ${somar}`);

console.log("===============");

const n = [5, 6, 8, 14, 0, 7, 2];
var mult = 0;
for (let i = 0; i < n.length; i++) {
  mult = n[i] * 3;
  console.log(mult);
}
console.log("===============");
//dada a matriz 2x3, escrever para o usuario todos seus elementos
//com as respectivas posicões da matriz
//[8,4,1]
//[3,7,8]

var tre = [
  [8, 4, 1],
  [3, 7, 8],
];

for (let i = 0; i < tre.length; i++) {
  for (let c = 0; c < tre[0].length; c++) {
    console.log(`Matriz [${i},${c}] = ${tre[i][c]} `);
  }
}
