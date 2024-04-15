let idades = [];
let opinioes = {
    '1': 0, // Péssimo
    '2': 0, // Regular
    '3': 0, // Bom
    '4': 0  // Ótimo
};
let totalMulheres = 0;
let totalHomens = 0;

function adicionarResposta() {
    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const opiniao = document.getElementById('opiniao').value;

    idades.push(idade);
    opinioes[opiniao]++;

    if (sexo === 'feminino') {
        totalMulheres++;
    } else {
        totalHomens++;
    }

    exibirResultados();
}

function exibirResultados() {
    const totalPessoas = idades.length;
    const mediaIdade = calcularMediaIdade();
    const idadeMaisVelha = Math.max(...idades);
    const idadeMaisNova = Math.min(...idades);
    const totalPessimo = opinioes['1'];
    const totalOtimoBom = opinioes['3'] + opinioes['4'];
    const porcentagemOtimoBom = (totalOtimoBom / totalPessoas) * 100;

    const resultadoHTML = `
        <p>Média da idade: ${mediaIdade}</p>
        <p>Idade da pessoa mais velha: ${idadeMaisVelha}</p>
        <p>Idade da pessoa mais nova: ${idadeMaisNova}</p>
        <p>Quantidade de pessoas que responderam péssimo: ${totalPessimo}</p>
        <p>Porcentagem de pessoas que responderam ótimo e bom: ${porcentagemOtimoBom.toFixed(2)}%</p>
        <p>Número de mulheres que responderam ao questionário: ${totalMulheres}</p>
        <p>Número de homens que responderam ao questionário: ${totalHomens}</p>
    `;
    
    document.getElementById('resultado').innerHTML = resultadoHTML;
}

function calcularMediaIdade() {
    const somaIdades = idades.reduce((acc, idade) => acc + idade, 0);
    return somaIdades / idades.length;
}
