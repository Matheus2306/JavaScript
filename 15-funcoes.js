function saudacao(nome) {
  console.log(`Olá ${nome}, seja bem-vindo!`);
}
saudacao(`Gustavo`);
saudacao(`Maria`);
saudacao(`Julia`);

// criando uma função de soma dois valores, retornando um resultado
function somar(valor1, valor2) {
  return valor1 + valor2;
}

console.log(`5 + 3 = ${somar(5, 3)}`);
console.log(`12 + 8 = ${somar(12, 8)}`);
console.log(`6,5 + 2,12 = ${somar(6.5, 2.12)}`);

var v1 = 9;
var v2 = 6;
console.log(`v1 + v2 = ${somar(v1, v2)}`);

//criando uma funcao que calcula e retorna o desconto de uma venda
function desconto(valvenda, desc) {
  return (valvenda * desc) / 100;
}

var totalpedido = 300;
var totaldesc = desconto(totalpedido, 5);

console.log(
  `---------------------------------------------------------------------------`
);
console.log(`total do pedido: R$ ${totalpedido}`);
console.log(`total dos descontos: R$ ${totaldesc}`);
console.log(`valor final da venda: R$ ${totalpedido - totaldesc}`);
console.log(
  `---------------------------------------------------------------------------`
);
//criando uma funcao que apresenta uma pessoa

function apresentapessoa(nome, idade, cidade) {
  console.log(
    `apresento a vocês: ${nome}, que tem ${idade}, e mora em ${cidade}!`
  );
}
apresentapessoa("Gustavo", 35, "Barra Bonita");
