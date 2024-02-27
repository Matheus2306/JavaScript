//01
var frutas = ["banana", "maçã", "pera", "uva", "morango"];
console.table(frutas);
console.log(
  "------------------------------------------------------------------------------"
);
//02
frutas.push("tangerina");
console.table(frutas);
console.log(
  "------------------------------------------------------------------------------"
);
//03
frutas.unshift("goiaba");
console.table(frutas);
console.log(
  "------------------------------------------------------------------------------"
);
//04
console.log("O indice 5 é: " + frutas[5]);
console.log(
  "------------------------------------------------------------------------------"
);
//05
// frutas.splice(4, 1);
// console.table(frutas);
//outra forma
var posi = frutas.indexOf("uva");
frutas.splice(posi, 1);
console.table(frutas);
console.log(
  "------------------------------------------------------------------------------"
);
//06
var copia1 = frutas.slice(2, 5);
console.table(copia1);
console.log(
  "------------------------------------------------------------------------------"
);
//01
var num5 = [1, 2, 3, 4, 5];
console.table(num5);
//02
console.log([3]);
//03
var copy1 = num5.slice();
console.table(copy1);
//04
copy1[0] = num5[0] * 2;
copy1[1] = num5[1] * 2;
copy1[2] = num5[2] * 2;
copy1[3] = num5[3] * 2;
copy1[4] = num5[4] * 2;
console.table(copy1);
