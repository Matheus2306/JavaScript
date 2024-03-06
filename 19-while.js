let contador = 0;
while (contador < 5) {
  console.log(contador);
  contador++;
}
var x = 11;
while (x > 10) {
  console.log(`Entrei no laço While...`);
  x--;
}
console.log(`terminei`);
console.log("================")
var limite = 500;
var fatura = 0;

while (fatura <= limite) {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(
    `gastei R$${gasto.toFixed(2)}------ Fatura: R$${fatura.toFixed(2)}`
  );
  fatura > limite && console.log(`estourou o limite do cartão `);
}
console.log("================")

var limite = 500;
var fatura = 0;
do {
  let gasto = Math.random() * 100;
  fatura += gasto;
  console.log(
    `gastei R$${gasto.toFixed(2)}------ Fatura: R$${fatura.toFixed(2)}`
  );
  fatura > limite && console.log(`estourou o limite do cartão `);
} while (fatura <= limite);
