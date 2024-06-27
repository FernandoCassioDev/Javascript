let leia = require("readline-sync");

//variaveis globais
let nome;
let idade;
let historico;

//lê o nome a idade e o historico do doador
nome = leia.question("\nDigite seu nome: ", {
  limitMessage: "Digite um nome válido",
});
idade = leia.questionInt("\nDigite sua idade: ", {
  limitMessage: "Digite um número inteiro",
});
historico = leia.keyInYNStrict(
  "\nessa e sua primeira doacao de sangue? ",
  {
    limitMessage: "Digite um valor booleano valido.",
  }
);

//mostra se o doador está apto para doar
if (idade >= 18 && idade <= 69) {
  if (idade >= 60 && idade <= 69 && historico == true) {
    console.log(`${nome.toUpperCase()} está não apto(a) para doar sangue!`);
  } else {
    console.log(`${nome.toUpperCase()} está apto(a) para doar sangue!`);
  }
} else {
  console.log(`${nome.toUpperCase()} está não apto(a) para doar sangue!`);
}
