let leia = require("readline-sync");

let numero, contador;
let tabuada;

numero = leia.questionInt("Digite o numero: ", {
  limitMessage: "Digite um numero valido!",
});

for (contador = 1; contador <= 10; contador++) {
  console.log(numero, " x ", contador, " = ", numero * contador);
}
