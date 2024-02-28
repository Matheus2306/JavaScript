// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros);
// console.log(numeros[2])

// numeros [2]=6
// console.log(numeros)
// console.log(numeros[2])
var dinos = ["Tiranossauro Rex", "estegossauro", "anquilossauro"];
console.log(dinos);
console.log(dinos[0]);
console.log("");
console.table(dinos); //cria tabela com os itens do array
console.log("o vetor tem", dinos.length, "elementos");

//add elementos ao vetor existente
dinos.push("brontossauro", "velocirapitor");
console.table(dinos);

dinos.unshift("triceratops");
console.table(dinos);

//obtendo um elemento com base em seu indice
console.log("primeira posição:", dinos[0]);
console.log("segunda posição:", dinos[1]);

//removendo elementos do vetor
dinos.pop();
console.table(dinos);
dinos.shift();
console.table(dinos);

dinos.splice(1, 1);
console.table("dinos");

console.log("");
console.log("-----------------continuação da aula-------------------");
var dinos = [
  "triceratops",
  "Tiranossauro rex",
  "estegossauro",
  "anquilossauro",
  "brontossauro",
  "ictinossauro",
  "pterodactilo",
  "espinossauro",
];
console.table(dinos);

var elemnetoProcurado = "brontossauro";
var posição = dinos.indexOf(elemnetoProcurado);
console.log("O " + elemnetoProcurado + " está no indice " + posição);

var elemnetoProcurado = "Tiranossauro rex";
var posição = dinos.indexOf(elemnetoProcurado);
console.log("O " + elemnetoProcurado + " está no indice " + posição);

var elemnetoProcurado = "ictinossauro";
var posição = dinos.indexOf(elemnetoProcurado);
console.log("O " + elemnetoProcurado + " está no indice " + posição);
console.log("-------------------------------------------------------------------")
//criando cópia de array (vetor)
var copia1 = dinos.slice();//.slice() faz uma cópia real do item de vetor 
console.log("Vetor cópia 1 ");
console.table(copia1);

var copia2 = dinos.slice(1,3)
console.log("vetor de copia 2")
console.table(copia2);
