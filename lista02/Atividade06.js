let leia = require("readline-sync");

//variaveis globais
let nome;
let codigoColab;
let salario;
let percent;

//lê as os dados do funcionario
nome = leia.question("\nNome do funcionario: ", {
  limitMessage: "Digite uma palavra valida",
});
codigoColab = leia.questionInt("\nCodigo do cargo do funcionario: ", {
  limitMessage: "Digite um codigo valido",
});
salario = leia.questionFloat("\nSalario do funcionario: ", {
  limitMessage: "Digite um numero valido",
});

//calcula novo salario e mostra o nome e cargo do colaborador
switch (codigoColab) {
  case 1:
    percent = (salario * 10) / 100;
    salario += percent;
    console.log(
      `Nome do colaborador: ${nome}\nCargo: Gerente \nSalário: ${salario.toLocaleString(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      )}`
    );
    break;
  case 2:
    percent = (salario * 7) / 100;
    salario += percent;
    console.log(
      `Nome do colaborador: ${nome}\nCargo: Vendedor \nSalário: ${salario.toLocaleString(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      )}`
    );
    break;
  case 3:
    percent = (salario * 9) / 100;
    salario += percent;
    console.log(
      `Nome do colaborador: ${nome}\nCargo: Gerente \nSalário: ${salario.toLocaleString(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      )}`
    );
    break;
  case 4:
    percent = (salario * 6) / 100;
    salario += percent;
    console.log(
      `Nome do colaborador: ${nome}\nCargo: Gerente \nSalário: ${salario.toLocaleString(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      )}`
    );
    break;
  case 5:
    percent = (salario * 5) / 100;
    salario += percent;
    console.log(
      `Nome do colaborador: ${nome}\nCargo: Gerente \nSalário: ${salario.toLocaleString(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      )}`
    );
    break;
  case 6:
    percent = (salario * 8) / 100;
    salario += percent;
    console.log(
      `Nome do colaborador: ${nome}\nCargo: Gerente \nSalário: ${salario.toLocaleString(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      )}`
    );
    break;
  default:
    console.log("código do cargo invalido");
    break;
}
