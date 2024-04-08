document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.choices button');

    buttons.forEach(button => {
        button.addEventListener('click', () => jogar(button.id));
    });
});

function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    
    let resultado = '';

    if (escolhaUsuario === escolhaComputador) {
        resultado = 'Empate!';
    } else if ((escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
               (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel') ||
               (escolhaUsuario === 'papel' && escolhaComputador === 'pedra')) {
        resultado = 'Você ganhou!';
    } else {
        resultado = 'Você perdeu!';
    }

    document.getElementById('resultado').innerHTML = `Você escolheu <span>${escolhaUsuario}</span>, o computador escolheu <span>${escolhaComputador}</span>. <strong>${resultado}</strong>`;
}