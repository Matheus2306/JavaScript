// class Pessoa {
//   constructor(pNome, pIdade) {
//     this.nome = pNome;
//     this.idade = pIdade;
//   }
//   apresentarSe() {
//     console.log(`meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// //tipo de objeto do "tipo pessoa
// var pessoa1 = new Pessoa("Dienifer", 52);
// var p2 = new Pessoa("Taldo Pedrin", 18);
// pessoa1.apresentarSe();
// p2.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// p2.envelhecer();
// p2.apresentarSe();
// console.log("============");

// //abistração permite modelar um problema ou conceito de forma generica
// //abistração
// class Pet {
//   constructor(tipo, nome, idade) {
//     this.nome = nome;
//     this.tipo = tipo;
//     this.idade = idade;
//   }
//   alimentar() {
//     console.log(`${this.nome} foi alimentado!`);
//   }
//   apresentar() {
//     console.log(`O meu ${this.tipo} se chama ${this.nome} e tem ${this.idade}`);
//   }
// }

// const meupet = new Pet("cachorro", "rex", 4);
// meupet.alimentar();
// meupet.apresentar();

// console.log("============");

// //herança um class que irá receber do ultimo class as especificações

// class Animal {
//   constructor(nome, idade, tipoAlimentação) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoAlimentação = tipoAlimentação;
//   }
//   alimentar() {
//     console.log(`O ${this.nome} foi alimentado com ${this.tipoAlimentação}`);
//   }
//   emitirsom() {
//     console.log(`barulho padrão de animal`);
//   }
// }
// class Catioro extends Animal {
//   alimentaar() {
//     console.log(`O cachorro ${this.nome} foi alimentado`);
//   }

//   emitirsoom() {
//     console.log("au au");
//   }
// }
// const meuCachorro = new Catioro("Rex", 3, "ração");
// meuCachorro.alimentar();
// meuCachorro.emitirsom();
// console.log("");
// meuCachorro.alimentaar();
// meuCachorro.emitirsoom();

// //encapsulamento visa proteger algumas propriedades da classe para que não possam ser asessadas ou por outras partes do códogo
// //escapulamento
// console.log("============");

// class Petzinho{
//     constructor(nome,idade,tipo){
//         this.nome=nome
//         this.idade=idade
//         this.tipo=tipo
//     }
//     getNome(){
//         return this.nome
//     }
//     setNome(novonome){
//         this.nome=novonome
//     }
// }

// const novoPetizinho= new Petzinho("bob", 3, "cachorro")

// console.log(novoPetizinho.getNome())//bob
// novoPetizinho.setNome("Rex")
// console.log(novoPetizinho.getNome())//rex]

// // console.log("============");
// console.log("--------------------Polimorfismo--------------------");
// class Animal {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   fazerBarulho() {
//     console.log("O animal faz um barulho genérico.");
//   }
// }

// class Cachorro extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O cachorro late!");
//   }
// }

// class Gato extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O gato mia!");
//   }
// }
// const animais = [
//     new Cachorro("Rex"),
//     new Gato("Mia"),
//     new Animal("Bob"), // Animal genérico
//   ];

//   for (const animal of animais) {
//     animal.fazerBarulho();
//   }

console.log("==========exemplos=========");
//criando uma classe retangulo

class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }
  obterArea() {
    return this.comprimento * this.largura;
  }
  obterPerimetro() {
    return this.comprimento * 2 + this.largura*2;
  }
  setComprimento(novoCompriment){
  this.comprimento=novoCompriment
  }
 setLargura(novaLargura){
  this.largura=novaLargura
 }
}
//criandoum objeto do tipo retangulo
var areaPerimetro = new Retangulo(12, 6);

function alteracao(retangulo) {
  console.table(retangulo);
  console.log(`largura ${retangulo.largura}`)
  console.log(`comprimento ${retangulo.comprimento}`)
  console.log(`${retangulo.obterArea()} cm²`);
  console.log(`${retangulo.obterPerimetro()} cm de perimetro`)
  
}
alteracao(areaPerimetro)
areaPerimetro.setComprimento(20)
areaPerimetro.setLargura(30)
alteracao(areaPerimetro)