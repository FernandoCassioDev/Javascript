let leia = require("readline-sync");

//variaveis globais
let numero1, numero2, codeOpe, result;

//lê os numeros
numero1 = leia.questionFloat("\nDigite o numero 1: ", {
  limitMessage: "Digite um numero valido",
});
numero2 = leia.questionFloat("\nDigite o numero 2: ", {
  limitMessage: "Digite um numero valido",
});
codeOpe = leia.questionInt("\nDigite o codigo da operacao: ", {
  limitMessage: "Digite um numero valido",
});

//executa a operação e mostra no console
switch (codeOpe) {
  case 1:
    result = numero1 + numero2;
    console.log(
      `${numero1.toFixed(1)} + ${numero2.toFixed(1)} = ${result.toFixed(1)}`
    );
    break;
  case 2:
    result = numero1 - numero2;
    console.log(
      `${numero1.toFixed(1)} - ${numero2.toFixed(1)} = ${result.toFixed(1)}`
    );
    break;
  case 3:
    result = numero1 * numero2;
    console.log(
      `${numero1.toFixed(1)} x ${numero2.toFixed(1)} = ${result.toFixed(1)}`
    );
    break;
  case 4:
    result = numero1 / numero2;
    console.log(
      `${numero1.toFixed(1)} / ${numero2.toFixed(1)} = ${result.toFixed(1)}`
    );
    break;
  default:
    console.log("\nCódigo da operação inválido!");
    break;
}
