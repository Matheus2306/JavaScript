class Aluno {
    constructor(ra, nome, dataNascimento, curso) {
        this.ra=ra
        this.nome=nome
        this.dataNascimento=dataNascimento
        this.curso=curso   
    }
    calcularIdade(){
       console.log(`eu nasci no ano de ${this.dataNascimento} e possuo ${2024 - this.dataNascimento} anos!!`)
    }
    apresentar(){
        console.log(`Meu nome é ${this.nome}, possuo o RA: ${this.ra}, nasci no ano ${this.dataNascimento} e faço o curso ${this.curso}`)
    }
}
var aluno1 = new Aluno(1234,"Jose",2000,"Dev")
aluno1.calcularIdade()
aluno1.apresentar()
