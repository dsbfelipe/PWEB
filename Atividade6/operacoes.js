function realizarOperacoes() {
    var numero1 = parseFloat(prompt("Digite o primeiro número:"));
    var numero2 = parseFloat(prompt("Digite o segundo número:"));
  
    var soma = numero1 + numero2;
    var subtracao = numero1 - numero2;
    var produto = numero1 * numero2;
    var divisao = numero1 / numero2;
    var resto = numero1 % numero2;
  
    alert("Soma: " + soma.toFixed(2) + "\n" +
          "Subtração: " + subtracao.toFixed(2) + "\n" +
          "Produto: " + produto.toFixed(2) + "\n" +
          "Divisão: " + divisao.toFixed(2) + "\n" +
          "Resto: " + resto.toFixed(2));
  }
  