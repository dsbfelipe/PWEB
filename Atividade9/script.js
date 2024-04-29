function calcularIMC() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    if (altura && peso) {
        var imc = peso / (altura * altura);
        var classificacao = '';
        var grau = ''; // Adicionando a variável grau

        if (imc < 18.5) {
            classificacao = 'Magreza';
            grau = '0';
        } else if (imc >= 18.5 && imc < 25) {
            classificacao = 'Normal';
            grau = '0';
        } else if (imc >= 25 && imc < 30) {
            classificacao = 'Sobrepeso';
            grau = 'I';
        } else if (imc >= 30 && imc < 40) {
            classificacao = 'Obesidade';
            grau = 'II';
        } else {
            classificacao = 'Obesidade Grave';
            grau = 'III';
        }

        document.getElementById('resultado').innerHTML = 'IMC: ' + imc.toFixed(2) + '<br>' +
            'Classificação: ' + classificacao + '<br>' +
            'Obesidade (GRAU): ' + grau; // Corrigindo para 'grau'
    } else {
        alert('Por favor, insira altura e peso válidos.');
    }
}