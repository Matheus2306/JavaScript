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
