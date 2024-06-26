let leia = require("readline-sync")

//Lê os valores
let salario = leia.questionFloat("Digite o Salario: ", {limitMessage: "Digite um numero real."})
let abono = leia.questionFloat("Digite o Abono: ", {limitMessage: "Digite um numero real."})

//calcula o novo salario
let novoSalario = salario + abono

//mostra o novo salario no console
console.log(`Novo Salário: ${novoSalario.toFixed(2)}`)