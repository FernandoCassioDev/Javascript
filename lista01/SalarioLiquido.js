let leia = require("readline-sync");

//lê os valores
let salarioBruto = leia.questionFloat("Digite o salario bruto: ", {
  limitMessage: "Digite um numero real.",
});
let adicionalNoturno = leia.questionFloat(
  "Digite o valor de adicional noturno: ",
  { limitMessage: "Digite um numero real." }
);
let horaExtra = leia.questionFloat("Digite o valor das horas extras: ", {
  limitMessage: "Digite um numero real.",
});
let descontos = leia.questionFloat("Digite o valor dos descontos: ", {
  limitMessage: "Digite um numero real.",
});


//calcula o salário líquido
let salarioLiquido =
  salarioBruto + adicionalNoturno + horaExtra * 5 - descontos;

console.log(`O salário liquido é: ${salarioLiquido.toFixed(2)}`);
