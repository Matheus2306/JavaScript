var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matriz);
console.log(
  "a diagonal da matriz 1 é: " +
    matriz[0][0] +
    ", " +
    matriz[1][1] +
    ", " +
    matriz[2][2]
);
console.log(
  "a diagonal da matriz 2 é: " +
    matriz[2][2] +
    ", " +
    matriz[1][1] +
    ", " +
    matriz[0][0]
);
console.log(
  "a diagonal da matriz 3 é: " +
    matriz[2][0] +
    ", " +
    matriz[1][1] +
    ", " +
    matriz[0][2]
);
console.log(
  "a diagonal da matriz 4 é: " +
    matriz[0][2] +
    ", " +
    matriz[1][1] +
    ", " +
    matriz[2][0]
);
console.log(
  "---------------------------------------------------------------------------------"
);
var cadastro = ["Matheus", 16, "roxo", "banana", "sao domingos", "nina"];
console.log("Olá " + cadastro[0] + "! " + "Seja bem-vindo ao nosso sistema");
console.log(
  "você mora no endereço " +
    cadastro[4] +
    ", e tem um pet chamado " +
    cadastro[5]
);
console.log(
  "sua idade é " + cadastro[1] + " e gosta muito da fruta " + cadastro[3]
);
console.log("sua cor favorita é " + cadastro[2]);
