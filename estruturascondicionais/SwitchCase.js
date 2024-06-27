let leia = require("readline-sync");

let nome;
let codigo;

nome = leia.question("\nDigite seu nome: ", {
  limitMessage: "Digite um nome válido",
});

console.log("\nFaixas Etárias: ");
console.log("\n 1 -- De 0 a 10 anos ");
console.log("\n 2 -- De 11 a 29 anos ");
console.log("\n 3 -- De 30 a 45 anos ");
console.log("\n 4 -- De 46 a 59 anos");
console.log("\n 5 -- De 60 a 65 anos ");
console.log("\n 6 -- Acima de 65 anos ");

codigo = leia.questionInt("\nDigite seu codigo: ", {
  limitMessage: "Digite um número inteiro",
});

switch (codigo) {
  case 1:
    console.log("\nSeu plano de saúde custa 100 reais");
    break;
  case 2:
    console.log("\nSeu plano de saúde custa 200 reais");
    break;
  case 3:
    console.log("\nSeu plano de saúde custa 300 reais");
    break;
  case 4:
    console.log("\nSeu plano de saúde custa 400 reais");
    break;
  case 5:
    console.log("\nSeu plano de saúde custa 500 reais");
    break;
  case 6:
    console.log("\nSeu plano de saúde custa 1000 reais");
    break;
  default:
    console.log("\nDigite um um códdigo válido.");
    break;
}
