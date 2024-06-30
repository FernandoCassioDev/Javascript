let leia = require("readline-sync");

//variaveis globais
let matrizInteiros = new Array(3),
  diagonalPrincipal = [],
  diagonalSecundaria = [];
let somaDiagonalPrincipal = 0,
  somaDiagonalSecundaria = 0;

//cria uma matriz regular  
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {
  matrizInteiros[indiceLinha] = Array(3);
}

//insere as informações passadas pelo usuario na matriz
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {
  for (
    let indiceColuna = 0;
    indiceColuna < matrizInteiros.length;
    indiceColuna++
  ) {
    matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(
      `Digite o valor da posicao ${indiceLinha},${indiceColuna}: `
    );
  }
}

//percorre a matriz
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {
  for (
    let indiceColuna = 0;
    indiceColuna < matrizInteiros.length;
    indiceColuna++
  ) {
    //pega os dados da diagonal principal e manda para o vetor "diagonaPrincipal"
    if (indiceLinha == indiceColuna) {
      diagonalPrincipal.push(matrizInteiros[indiceLinha][indiceColuna]);
      //soma os itens da diagonal principal
      somaDiagonalPrincipal += matrizInteiros[indiceLinha][indiceColuna];
    }
    //pega os dados da diagonal secundaria e manda para o vetor "diagonalSecundaria"
    if (
      matrizInteiros[indiceLinha][indiceColuna] % 2 == 1 &&
      matrizInteiros[indiceLinha][indiceColuna] >= 3 &&
      matrizInteiros[indiceLinha][indiceColuna] <= 7
    ) {
      diagonalSecundaria.push(matrizInteiros[indiceLinha][indiceColuna]);
      
      //soma os itens da diagonal secundaria
      somaDiagonalSecundaria += matrizInteiros[indiceLinha][indiceColuna];
    }
  }
}

//mostra as informações no console
console.log(`Elementos da diagonal principal: ${diagonalPrincipal.join(",")}`);
console.log(
  `Elementos da diagonal secundaria: ${diagonalSecundaria.join(",")}`
);
console.log(
  `Soma dos elementos da diagonal principal: ${somaDiagonalPrincipal}`
);
console.log(
  `Soma dos elementos da diagonal secundaria: ${somaDiagonalSecundaria}`
);
