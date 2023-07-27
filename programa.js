let numero;

function calculoQuadrado(numero) {
        return numero * numero;
  
    
}

function calcularRaiz(numero) {
    return Math.sqrt(numero);
}

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let menorNumero = numero1 < numero2 ? numero1 : numero2;

let maiorNumero = numero1 > numero2 ? numero1 : numero2;

let quadradoMenor = calculoQuadrado(menorNumero);

let raizQuadradaMaior = maiorNumero >= 0 ? calcularRaiz(maiorNumero) : "Não é possível calcular a raiz quadrada de um número negativo.";

let resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = "O quadrado do menor número é: " + quadradoMenor + "<br>" + "A raiz quadrada do maior número é: " + raizQuadradaMaior; 
