let leia = require("readline-sync");

//variaveis globais
let codigo;
let saldo = 1000.0;
let valorSaque;
let valorDeposito;

//mostra o menu
console.log("\nCódigo da Operação |  Operação");
console.log("\n 1 | Saldo");
console.log("\n 2 | Saque");
console.log("\n 3 | Depósito");

//lê o codigo da operação
codigo = leia.questionFloat("\nDigite o codigo da operacao: ", {
  limitMessage: "Digite um valor válido",
});

//realiza o operação e mostra o saldo
switch (codigo) {
  case 1:
    console.log(saldo.toFixed(2));
    break;
  case 2:
    console.log("Operação - Saque");
    valorSaque = leia.questionFloat("\nDigite o valor do saque: ", {
      limitMessage: "Digite um valor válido",
    });
    if (valorSaque > saldo) {
      console.log("Saldo insuficiente!");
    } else {
      saldo -= valorSaque;
      console.log(`Novo saldo: ${saldo.toFixed(2)}`);
    }
    break;
  case 3:
    console.log("Operação - Deposito");
    valorDeposito = leia.questionFloat("\nDigite o valor do deposito: ", {
      limitMessage: "Digite um valor válido",
    });
    saldo += valorDeposito;
    console.log(`Novo saldo: ${saldo.toFixed(2)}`);
    break;
    default:
        console.log("Operação Inválida!")
    break; 
}
