let leia = require("readline-sync");

let inteiros = [],
  indiceImpar = [],
  par = [];
let entrada,
  soma = 0,
  media = 0;

//lê 10 valores do usuario e manda para o vetor "inteiros"
for (let i = 0; i < 10; i++) {
  entrada = leia.questionInt(`Digite o valor ${i} do vetor: `, {
    limitMessage: "Digite um numero valido",
  });
  inteiros.push(entrada);
}

//percorre os elementos nos indices impares e manda para o vetor "indiceImpar"
for (let indice = 1; indice < inteiros.length; indice += 2) {
  indiceImpar.push(inteiros[indice]);
}

//verifica os elemtos que são par e manda para o vetor "par"
for (let index = 0; index < inteiros.length; index++) {
  if (inteiros[index] % 2 == 0) {
    par.push(inteiros[index]);
  }

  //faz a soma de todos o elemtos e calcula a media
  soma += inteiros[index];
  media = soma / inteiros.length;
}

//mostra as informações no console
console.log(`Elementos nos indices impares ${indiceImpar.join(",")}`);
console.log(`Elementos que são números pares ${par.join(",")}`);
console.log(`Soma: ${soma}`);
console.log(`Média: ${media.toFixed(2)}`);
