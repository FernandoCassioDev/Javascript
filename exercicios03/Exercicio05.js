let leia = require("readline-sync");
let entrada;
let soma = 0;
do{
    entrada = leia.questionInt("Digite um numero positivo: ")
    if(entrada > 0){
        soma += entrada
    }else if(entrada == 0){
        console.log(`A soma dos números positivos é: ${soma}`)
    }
}while(entrada != 0)