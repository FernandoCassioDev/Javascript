let leia = require("readline-sync");

//variaveis globais
let entrada,
  soma = 0;

/*realiza a soma de todos os numeros positivos enquanto 
a entrada do usuario for diferente de 0*/
do {
  entrada = leia.questionInt("Digite um numero positivo: ", {
    limitMessage: "Digite um numero valido",
  });
  if (entrada > 0) {
    soma += entrada;
  } else if (entrada == 0) {
    console.log(`A soma dos números positivos é: ${soma}`);
  }
} while (entrada != 0);
