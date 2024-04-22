document.getElementById("btn1").onclick = function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var maior = Math.max(num1, num2, num3);
    document.getElementById("resultado1").innerText = "O maior número é: " + maior;
};

document.getElementById("btn2").onclick = function() {
    var num4 = parseFloat(document.getElementById("num4").value);
    var num5 = parseFloat(document.getElementById("num5").value);
    var num6 = parseFloat(document.getElementById("num6").value);
    var nums = [num4, num5, num6];
    nums.sort(function(a, b){return a - b});
    document.getElementById("resultado2").innerText = "Números em ordem crescente: " + nums.join(", ");
};

document.getElementById("btn3").onclick = function() {
    var palavra = document.getElementById("palavra").value.toUpperCase();
    var reversed = palavra.split("").reverse().join("");
    if (palavra === reversed) {
        document.getElementById("resultado3").innerText = "É um palíndromo.";
    } else {
        document.getElementById("resultado3").innerText = "Não é um palíndromo.";
    }
};

document.getElementById("btn4").onclick = function() {
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado1 === lado3) {
            document.getElementById("resultado4").innerText = "É um triângulo equilátero.";
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            document.getElementById("resultado4").innerText = "É um triângulo isósceles.";
        } else {
            document.getElementById("resultado4").innerText = "É um triângulo escaleno.";
        }
    } else {
        document.getElementById("resultado4").innerText = "Não é um triângulo válido.";
    }
};
