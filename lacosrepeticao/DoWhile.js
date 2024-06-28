let leia = require("readline-sync");

let continua;
let numero1, numero2, resultado;

do {
  numero1 = leia.questionInt("Digite o primeiro valor: ");
  numero2 = leia.questionInt("Digite o segundo valor: ");

  resultado = numero1 + numero2;
  console.log("O resultado da soma é: ", resultado);

  console.log("\n----------menu-------------");
  continua = leia.keyInYNStrict("\n Deseja usar nossa calculadora de soma? ");
  console.log("------------------------");
} while (continua == true);
