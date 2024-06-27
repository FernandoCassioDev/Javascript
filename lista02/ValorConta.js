let leia = require("readline-sync");

//variaveis globais
let codigo;
let quantidade;
let nomeProduto;
let valorProduto;
let valorTotal;

//lê o codigo do produto e quantidade
codigo = leia.questionInt("\nDigite o codigo do produto: ", {
  limitMessage: "Digite um numero valido",
});
quantidade = leia.questionInt("\nDigite a quantidade: ", {
  limitMessage: "Digite um numero valido",
});

//mostra valor total e nome do produto
switch (codigo) {
  case 1:
    nomeProduto = "Cachorro Quente";
    valorProduto = 10.0;
    valorTotal = valorProduto * quantidade;
    console.log(
      `\nProduto: ${nomeProduto}\nValor total: ${valorTotal.toFixed(2)}`
    );
    break;
  case 2:
    nomeProduto = "X-Salada";
    valorProduto = 15.0;
    valorTotal = valorProduto * quantidade;
    console.log(
      `\nProduto: ${nomeProduto}\nValor total: ${valorTotal.toFixed(2)}`
    );
    break;
  case 3:
    nomeProduto = "X-Bacon";
    valorProduto = 18.00;
    valorTotal = valorProduto * quantidade;
    console.log(
      `\nProduto: ${nomeProduto}\nValor total: ${valorTotal.toFixed(2)}`
    );
    break;
    case 4:
    nomeProduto = "Bauru";
    valorProduto = 12.00;
    valorTotal = valorProduto * quantidade;
    console.log(
      `\nProduto: ${nomeProduto}\nValor total: ${valorTotal.toFixed(2)}`
    );
    break;
    case 5:
    nomeProduto = "Refrigerante";
    valorProduto = 8.00;
    valorTotal = valorProduto * quantidade;
    console.log(
      `\nProduto: ${nomeProduto}\nValor total: ${valorTotal.toFixed(2)}`
    );
    break;
    case 6:
    nomeProduto = "Suco de laranja";
    valorProduto = 13.00;
    valorTotal = valorProduto * quantidade;
    console.log(
      `\nProduto: ${nomeProduto}\nValor total: ${valorTotal.toFixed(2)}`
    );
    break;
  default:
    console.log("Código do produto inválido!");
    break;
}
