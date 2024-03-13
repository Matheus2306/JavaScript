var texto = "Olá eu sou um texto";
console.log(`${texto}`);
var texto1 = "Olá, ";
var texto2 = "eu sou um texto!";
var texto3 = texto1 + texto2;
console.log(texto3);
//outra forma de fazer a soma (recomendado)
texto1 += texto2;
console.log(texto1);
console.log("===============");

//tamanho da string(método length)
var texto4 = "olá, eu sou um texto!";
console.log(`tamanhodo texto: ${texto4.length} caracteres!`);
console.log("===============");

//caracteres  de escape /
var texto5 = ' Olá, meu nome é "Cristiano"!';
console.log(texto5);
var texto6 = "Quebra de linha \noutra linha";
console.log(texto6);
var texto7 = "Tabulação \toutra tabulação";
console.log(texto7);
//obtendo partes de uma string (Método substring)
var texto8 = "O esperto rato, perplexo fica na frente ao aparato";
var sub = texto8.substring(16, 24);//indice que inicia (16) e até onde imprime (24)
console.log(sub);
//substituir partes de uma string (método replace)
var texto9="O rato roeu a rouoa do rei de roma "
var novoTexto =texto9.replace("rato", "coelho")

console.log(texto9)
console.log(novoTexto)
// Maiúsculas e minúsculas (Métodos toUpperCase e toLowerCase)
var texto10 = "O RATO Roeu a rOUpa do REI de Roma!";
console.log(texto10.toUpperCase());
console.log(texto10.toLowerCase());

//limpando espaços em branco (método trim)
var texto11 = "         Texto aqui no meio          "
console.log("******", texto11, `******`)
console.log("******", texto11.trim(), "******")

var texto12="O rato roeu a roupa do rato de roma"
var posicao=texto12.indexOf("rato")
var ultimaPosição= texto12.lastIndexOf("rato")
console.log(`primeira ocorencia ${posicao}-- ultima ocorencia: ${ultimaPosição}`)
// Dividindo uma string em partes (Método split)
var texto13 = "O rato roeu a roupa do rei de Roma!";
var palavras = texto13.split(" ");
console.table(palavras);
var chaveAcesso = "1234-5678-9012-3456";
var partes = chaveAcesso.split("-");
console.table(partes);