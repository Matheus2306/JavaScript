//condição simples unica
var anoNascimento = 2003;
if (anoNascimento > 2003) console.log(`A pessoa nasceu depois de 2003`);

if (anoNascimento < 2003) console.log(`a pessoa nasceu antes de 2003`);

if (anoNascimento == 2003) console.log(`a pessoa nasceu em 2003`);
console.log(
  "=========================================================================="
);

//condicional simples if-else
var anoNascimento = 2002;
if (anoNascimento > 2000) console.log(`A pessoa nasceu depois de de 2000`);
else console.log(`A pessoa nasceu antes de 2000`);
console.log(
  "=========================================================================="
);

//condicional composto com if
const login = "admin";
var senha = "123456";

//banco de dados
const loginuser = "admin";
const senhauser = "admin";

if (login == loginuser && senha == senhauser)
  console.log(`Acesso permitido`); //&& significa E -- || significa ou
else console.log(`Acesso negado`);

console.log("===============================================================");
// //função sinaleiro
function sinaleiro(cor) {
  if (cor == "vermelho") console.log(`pare`);
  else if (cor == "amarelo") console.log(`atenção`);
  else if (cor == "verde") console.log(`siga`);
  else
    console.log(`voce informou cores diferentes de verde, amarelo ou vermelho`);
}
sinaleiro(`vermelho`);
console.log("================================================================");
//desvio condicional if com bloco de comando
var idade = 18;

if (idade <= 18) {
  console.log("entrou no if ...");
  idade++, console.log("incremento a idade...");
  console.log(`nova idade é ${idade}`);
  console.log(`agora estou saindo do bloco de codigos if`);
}
console.log(`terminei`);
console.log("================================================================");

//desvio condicional if inline (ternario)
    // Validação (algo == algo ) ou (algo > algumacoisa)
    //? (IF)
    //se for verdadeiro
    // : (ELSE)
    //se for falso
    //testeDeValidação == teste ? "bla bla" : ("ble ble")
var preco = 500;
var resultado = preco <= 100 ? "ta barato" : "vish ta caro!"; // ? = SE | : = SENÃO
console.log(resultado);
console.log("===============================================================");
