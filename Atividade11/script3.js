// Forma 3: Usando Classes ES6
class Funcionario {
    constructor(matricula, nome, funcao) {
        this.matricula = matricula;
        this.nome = nome;
        this.funcao = funcao;
    }
}

const funcionario3 = new Funcionario('12345', 'João', 'Desenvolvedor');
console.log(funcionario3);
