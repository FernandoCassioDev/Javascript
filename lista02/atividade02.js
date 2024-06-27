let leia = require("readline-sync");

//variaveis globais
let numero;

//lê o numero
numero = leia.questionInt("\nDigite o numero: ", {
  limitMessage: "Digite um numero válido",
});

//verifica se o número é par ou impar e positivo ou negativo.
if(numero % 2 == 0){
    if(numero > 0){
        console.log(`O número ${numero.toFixed(0)} é par e positivo`)
    }else{
        console.log(`O número ${numero.toFixed(0)} é par e negativo`)
    }
}else if(numero == 0){
    console.log(`O número ${numero.toFixed(0)} é neutro`)
}else{
    if(numero > 0){
        console.log(`O número ${numero.toFixed(0)} é impar e positivo`)
    }else{
        console.log(`O número ${numero.toFixed(0)} é impar e negativo`)
    }
}