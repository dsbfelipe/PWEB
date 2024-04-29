// Forma 2: Usando uma Função Construtora
function Funcionario(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
}

const funcionario2 = new Funcionario('12345', 'João', 'Desenvolvedor');
console.log(funcionario2);
