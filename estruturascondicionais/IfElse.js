let leia = require("readline-sync");

let nome;
let idade;

nome = leia.question("\nDigite seu nome: ", {
  limitMessage: "Digite um nome válido",
});
idade = leia.questionInt("\nDigite sua idade: ", {
  limitMessage: "Digite um número inteiro",
});

if (idade >= 0 && idade <= 10) {
  console.log("\nO seu plano custará 100 reais por mês");
} else if (idade <= 29) {
  console.log("\nO seu plano custará 200 reais por mês");
} else if (idade <= 45) {
  console.log("\nO seu plano custará 300 reais por mês");
} else if (idade <= 59) {
  console.log("\nO seu plano custará 400 reais por mês");
} else if (idade <= 65) {
  console.log("\nO seu plano custará 500 reais por mês");
} else {
  console.log("\nO seu plano custará 1000 reais por mês");
}

if (nome === "joe") {
  console.log("\nMuito obrigado", nome.toUpperCase());
}
