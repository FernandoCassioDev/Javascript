let leia = require("readline-sync");

//variaveis globais
let matrizNotas = new Array(10),
  medias = [];

let calcMedia0 = 0,
  calcMedia1 = 0,
  calcMedia2 = 0,
  calcMedia3 = 0,
  calcMedia4 = 0,
  calcMedia5 = 0,
  calcMedia6 = 0,
  calcMedia7 = 0,
  calcMedia8 = 0,
  calcMedia9 = 0,
  notas0 = 0,
  notas1 = 0,
  notas2 = 0,
  notas3 = 0,
  notas4 = 0,
  notas5 = 0,
  notas6 = 0,
  notas7 = 0,
  notas8 = 0,
  notas9 = 0;

//cria uma matriz irregular
  for (let indiceLinha = 0; indiceLinha < matrizNotas.length; indiceLinha++) {
  matrizNotas[indiceLinha] = Array(4);
}

//insere as notas passadas pelo usuario na matriz
for (let indiceLinha = 0; indiceLinha < matrizNotas.length; indiceLinha++) {
  for (
    let indiceColuna = 0;
    indiceColuna < matrizNotas[indiceLinha].length;
    indiceColuna++
  ) {
    matrizNotas[indiceLinha][indiceColuna] = leia.questionFloat(
      `Digite uma nota para o aluno ${indiceLinha}: `,
      { limitMessage: "Digite uma nota valida!" }
    );
  }
}

//percorre a matriz já finalizada
for (let indiceLinha = 0; indiceLinha < matrizNotas.length; indiceLinha++) {
  for (
    let indiceColuna = 0;
    indiceColuna < matrizNotas[indiceLinha].length;
    indiceColuna++
  ) {
    //faz o calculo das medias de cada aluno da matriz irregular
    switch (indiceLinha) {
      case 0:
        notas0 += matrizNotas[indiceLinha][indiceColuna];
        calcMedia0 = notas0 / 4;
        break;
      case 1:
        notas1 += matrizNotas[indiceLinha][indiceColuna];
        calcMedia1 = notas1 / 4;
        break;
      case 2:
        notas2 += matrizNotas[indiceLinha][indiceColuna];
        calcMedia2 = notas2 / 4;
        break;
      case 3:
        notas3 += matrizNotas[indiceLinha][indiceColuna];
        calcMedia3 = notas3 / 4;
        break;
      case 4:
        notas4 += matrizNotas[indiceLinha][indiceColuna];
        calcMedia4 = notas4 / 4;
        break;
      case 5:
        notas5 += matrizNotas[indiceLinha][indiceColuna];
        calcMedia5 = notas5 / 4;
        break;
      case 6:
        notas6 += matrizNotas[indiceLinha][indiceColuna];
        calcMedia6 = notas6 / 4;
        break;
      case 7:
        notas7 += matrizNotas[indiceLinha][indiceColuna];
        calcMedia7 = notas7 / 4;
        break;
      case 8:
        notas8 += matrizNotas[indiceLinha][indiceColuna];
        calcMedia8 = notas8 / 4;
        break;
      case 9:
        notas9 += matrizNotas[indiceLinha][indiceColuna];
        calcMedia9 = notas9 / 4;
        break;
    }
  }
}

//manda as medias de cada aluno para o vetor "medias"
medias.push(calcMedia0.toFixed(1));
medias.push(calcMedia1.toFixed(1));
medias.push(calcMedia2.toFixed(1));
medias.push(calcMedia3.toFixed(1));
medias.push(calcMedia4.toFixed(1));
medias.push(calcMedia5.toFixed(1));
medias.push(calcMedia6.toFixed(1));
medias.push(calcMedia7.toFixed(1));
medias.push(calcMedia8.toFixed(1));
medias.push(calcMedia9.toFixed(1));

//mostra as medias de cada aluno no console
console.log(medias.join(","));
