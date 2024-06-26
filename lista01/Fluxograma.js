let leia = require("readline-sync")

let salario = leia.questionFloat("Digite o Salario: ", {limitMessage: "Digite um numero real."})
let abono = leia.questionFloat("Digite o Abono: ", {limitMessage: "Digite um numero real."})

let novoSalario = salario + abono

console.log(`Novo Salário: ${novoSalario.toFixed(2)}`)