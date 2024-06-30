let leia = require("readline-sync");

//variaveis globais
let idade = 1;
let cont1 = 0, cont2 = 0;

//lê todas as idades postivas digitadas pelo usuario
while (idade > 0) {
  idade = leia.questionInt("Digite a idade: ", {
    limitMessage: "Digite uma idade valida",
  });

  //contabiliza quantas idades são menor que 21 e maior que 50
  if(idade < 21){
    cont1++
  }else if(idade > 50){
    cont2++
  }
}

//mostra quantas idades são menor que 21 e maior que 50
console.log(`Total de pessoas menor de 21 anos: ${cont1-1}`)
console.log(`Total de pessoas maior de 50 anos: ${cont2}`)
