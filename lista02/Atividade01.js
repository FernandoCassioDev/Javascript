let leia = require("readline-sync");

//variaveis globais
let numeroA, numeroB, numeroC, soma;

//lê o nome a idade e o historico do doador
numeroA = leia.questionInt("\nDigite o numero A: ", {
  limitMessage: "Digite um numero válido",
});
numeroB = leia.questionInt("\nDigite o numero B: ", {
  limitMessage: "Digite um numero válido",
});
numeroC = leia.questionInt("\nDigite o numero C: ", {
  limitMessage: "Digite um numero válido",
});

//realiza a soma de A com B
soma = numeroA + numeroB;

//realiza a verificação se a soma é maior, igual ou menor que C 
if (soma < numeroC) {
  console.log(
    `${numeroA.toFixed(0)} + ${numeroB.toFixed(0)} = ${soma.toFixed(0)} < ${numeroC.toFixed(0)}
    \nA soma de A + B é menor que C`
  );
} else if (soma == numeroC) {
  console.log(
    `${numeroA.toFixed(0)} + ${numeroB.toFixed(0)} = ${soma.toFixed(0)} = ${numeroC.toFixed(0)}
    \nA soma de A + B é igual que C`
  );
}else{
  console.log(
    `${numeroA.toFixed(0)} + ${numeroB.toFixed(0)} = ${soma.toFixed(0)} > ${numeroC.toFixed(0)}
    \nA soma de A + B é maior que C`
  );
}
