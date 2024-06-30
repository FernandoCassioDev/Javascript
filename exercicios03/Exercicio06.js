let leia = require("readline-sync");

//variaveis globais
let entrada,
  soma = 0,
  total = 0,
  result = 0;

/*lê a entrada do usuario e verifica se o numero
é positivo e multiplo de 3*/
do {
  entrada = leia.questionInt("Digite um numero inteiro: ", {
    limitMessage: "Digite um numero valido!",
  });
  if (entrada % 3 == 0 && entrada > 0) {
    soma += entrada;
    total++;
  }
} while (entrada != 0);

//calcula media dos numeros positivos e multiplos de 3
result = soma / total;

//mostra no console
console.log(
  `A média de todos os numeros multiplos de 3 é: ${result.toFixed(2)}`
);
