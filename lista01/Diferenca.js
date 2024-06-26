let leia = require("readline-sync")

//Lê os valores
let n1 = leia.questionFloat("Digite o primeiro valor: ", {limitMessage: "Digite um valor real."})
let n2 = leia.questionFloat("Digite o segundo valor: ", {limitMessage: "Digite um valor real."})
let n3 = leia.questionFloat("Digite o terceiro valor: ", {limitMessage: "Digite um valor real."})
let n4 = leia.questionFloat("Digite o quarto valor: ", {limitMessage: "Digite um valor real."})

//calcaula o resultado
let result = (n1 * n2) - (n3 * n4)

//mostra a diferença no console
console.log(`Diferença: ${result.toFixed(1)}`)