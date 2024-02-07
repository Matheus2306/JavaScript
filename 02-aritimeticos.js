//utilizando operadores aritimeticos com JavaScript

//console.log("a soma entre 8 e 7 é:", 8+7);

//efetuar a soma entre dois numeros informados por voce (var nome_variavel = 12)
// var x = 7;
// var y = 10;
// console.log("x vale", x, ", y vale ", y, "e a soma entre x e y é:", x + y);
// console.log("")
// var soma = x + y;
// var subtracao = x - y;
// var multiplicacao = x * y;
// var divisao = x / y;

// console.log("soma = ", soma);
// console.log("subtracao = ",subtracao);
// console.log("multiplicacao = ",multiplicacao);
// console.log("divisao =", divisao);

//regras para nomear identificadores (var, const ou let)
// podem comçar com A-Z, a-z, _ ou $

// var MinhaVariavel = 10;
// var outraVariavel = 20;
// const _minhavariavel = 3.1514;
// var $minhavariavel = 11;

// var v1 = 10;
// var v2 = 3;
// console.log("-----------------------------");
// console.log("Valores v1=", v1, "| v2 =", v2);
// console.log("-----------------------------");
// console.log("resto de divisao inteira v1 % v2=", v1 ** v2);
// console.log("exponenciacao v1**v2 (v1 elevado a v2)=", v1 ** v2);

//exercicios de fixacao
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


