function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
}

Retangulo.prototype.calcularArea = function() {
    return this.base * this.altura;
}

var retangulo = new Retangulo(parseInt(prompt("Digite a base do retângulo:")), parseInt(prompt("Digite a altura do retângulo:")));
console.log("Área do retângulo:", retangulo.calcularArea());


class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    getDados() {
        return `Nome: ${this.nomeCorrentista}, Banco: ${this.banco}, Número da Conta: ${this.numeroConta}, Saldo: ${this.saldo}`;
    }
}


class CorrenteComSaldoEspecial extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, limiteEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.limiteEspecial = limiteEspecial;
    }
}


class PoupancaComJuros extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }
}

var contaCorrente = new CorrenteComSaldoEspecial(
    prompt("Nome do correntista da conta corrente:"), 
    prompt("Nome do banco:"), 
    prompt("Número da conta corrente:"), 
    parseFloat(prompt("Saldo da conta corrente:")), 
    parseFloat(prompt("Limite especial da conta corrente:"))
);

var contaPoupanca = new PoupancaComJuros(
    prompt("Nome do correntista da conta poupança:"), 
    prompt("Nome do banco:"), 
    prompt("Número da conta poupança:"), 
    parseFloat(prompt("Saldo da conta poupança:")), 
    parseFloat(prompt("Taxa de juros da conta poupança:")), 
    prompt("Data de vencimento da conta poupança:")
);

console.log("Dados da conta corrente:", contaCorrente.getDados());
console.log("Dados da conta poupança:", contaPoupanca.getDados());
