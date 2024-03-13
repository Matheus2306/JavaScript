class Aluno {
  constructor(ra, nome, dataNascimento, curso) {
    this.ra = ra;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.curso = curso;
  }
  calcularIdade() {
    console.log(
      `eu nasci no ano de ${this.dataNascimento} e possuo ${
        2024 - this.dataNascimento
      } anos!!`
    );
  }
  apresentar() {
    console.log(
      `Meu nome é ${this.nome}, possuo o RA: ${this.ra}, nasci no ano ${this.dataNascimento} e faço o curso ${this.curso}`
    );
  }
}
var aluno1 = new Aluno(1234, "Jose", 2000, "Dev");
aluno1.calcularIdade();
aluno1.apresentar();
console.log("=====================================");
console.log("");
class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  crieSorvete() {
    console.log(
      `O pedido é um Sorvete de: ${this.sabor}, tamanho: ${this.tamanho} e custa: R$${this.preco}`
    );
  }
  setPreco(novoPreco) {
    this.preco = novoPreco;
  }
}
var sorvete = new Sorvete("Morango", 5, "Grande");
var sorvete1 = new Sorvete("Chocolate", 7, "Pequeno");
var sorvete2 = new Sorvete("Melancia", 4, "Médio");
sorvete.crieSorvete();
sorvete1.crieSorvete();
sorvete2.crieSorvete();
sorvete.setPreco(10.51);
sorvete.crieSorvete();
//outra forma de se fazer 
console.log("-------------");
const sorvetes = [
  new Sorvete("Morango", 5, "Grande"),
  new Sorvete("Chocolate", 7, "Pequeno"),
  new Sorvete("Melancia", 4, "Médio"),
];
for (const sorvete of sorvetes) {
  sorvete.crieSorvete();
}
sorvetes[0].setPreco(10.51);
sorvetes[0].crieSorvete()