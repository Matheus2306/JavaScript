var pessoa = "marcos";
var banco = "Inter";
var agencia = 45;
var conta = 993456;
var saldo = 7594;

console.log(
  "seja bem vindo",
  pessoa,
  "proprietario da conta:",
  conta,
  "a agencia",
  agencia,
  "do banco do",
  banco,
  "seu saldo atual é de R$",
  saldo
);
console.log("-------------------------------------------------------");
console.log(
  "detectamos uma atividade de sua conta de compra no valor de R$300"
);
console.log("seu saldo atual é de", saldo - 300);
saldo=saldo-300
console.log("-------------------------------------------------------")
console.log("foi feito uma transferencia via pix no valor de 200")
console.log("saldo de:", saldo + 200)
saldo=saldo + 200
console.log("-------------------------------------------------------")
console.log("foi feito uma transferencia via pix no valor de 90")
console.log("saldo de:", saldo + 90)
console.log("-------------------------------------------------------")
saldo= saldo +90
console.log("compra no valor de 40")
console.log("saldo de:", saldo - 40)
console.log("-------------------------------------------------------")
saldo= saldo-90
console.log("compra no valor de 500")
console.log("saldo de:", saldo - 500)
saldo= saldo-500
console.log(
    "seja bem vindo",
    pessoa,
    "proprietario da conta:",
    conta,
    "a agencia",
    agencia,
    "do banco do",
    banco,
    "seu saldo atual é de R$",
    saldo
  )