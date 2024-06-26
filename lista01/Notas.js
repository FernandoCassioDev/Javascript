let leia = require("readline-sync");


//lê os valores
let nota1 = leia.questionFloat("Digite a primeira nota: ", {limitMessage: "Digite um numero real."});
let nota2 = leia.questionFloat("Digite a segunda nota: ", {limitMessage: "Digite um numero real."});
let nota3 = leia.questionFloat("Digite a terceira nota: ", {limitMessage: "Digite um numero real."});
let nota4 = leia.questionFloat("Digite a quarta nota: ", {limitMessage: "Digite um numero real."});

//calcula a média
let media = (nota1 + nota2 + nota3 + nota4) / 4

//mostra o média das notas no console
console.log(`A média das notas é: ${media.toFixed(1)}`)
