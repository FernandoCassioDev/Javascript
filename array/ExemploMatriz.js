let leia = require("readline-sync");


let matrizInteiros = Array(3);

for(let indiceLinha =0; indiceLinha < matrizInteiros.length; indiceLinha++){
    matrizInteiros[indiceLinha] = Array(3)
}

for (let indiceLinha = 0; i < matrizInteiros.length; i++) {
    for(let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++ ){

        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(`Digite um elemento [${indiceLinha}]`)
    }
}

console.table(matrizInteiros)