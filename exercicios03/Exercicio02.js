let leia = require("readline-sync");

//variaveis globais
let numero,
  par = 0,
  impar = 0;

//lê os numeros digitados pelo usuario
for (let i = 0; i < 10; i++) {
  numero = leia.questionInt("\nDigite o numero: ", {
    limitMessage: "Digite um numero valido",
  });

  //contabiliza se o numero é par ou impar 
  if(numero % 2 == 0){
    par++
  }else{
    impar++
  }

}

//mostra a quantidade de numeros pares e impares no console
console.log(`Total de números pares: ${par}`)
console.log(`Total de números pares: ${impar}`)

