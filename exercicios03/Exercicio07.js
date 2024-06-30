let leia = require("readline-sync");

//cariaveis globais
let vetorInt = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let entrada, valor;

//lê o valor que o usuario deseja procurar no vetor
entrada = leia.questionInt("Digite o numero de deseja procurar: ", {
  limitMessage: "Digite um numero valido!",
});

//pega o indice do valor
valor = vetorInt.indexOf(entrada);

//verifica se o valor foi encontrado no vetor e mostra no console
if (valor != -1) {
  console.log(`o número ${entrada} está localizado na posição ${valor}`);
} else {
  console.log(`O número ${entrada} não foi encontrado!`);
}
