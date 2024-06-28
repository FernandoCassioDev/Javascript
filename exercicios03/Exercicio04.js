let leia = require("readline-sync");

//variaveis globais
let idade, genero, stack;
let continua = true;
let backEnd = 0,
  total = 0,
  somaIdade = 0,
  mulherFrontend = 0,
  homemMobile = 0,
  naoBinarioFull = 0;

while (continua == true) {
  //lê as informações do colaborador
  idade = leia.questionInt("\nDigite a idade do colaborador: ", {
    limitMessage: "Digite um numero valido",
  });
  genero = leia.questionInt(
    "\nDigite o codigo da identidade de genero do colaborador: ",
    {
      limitMessage: "Digite um numero valido",
    }
  );
  stack = leia.questionInt("\nDigite o codigo da stack do colaborador: ", {
    limitMessage: "Digite um numero valido",
  });

  switch (stack) {
    case 1:
      backEnd++;
      break;
  }

  if (genero == 1 || genero == 4) {
    if (stack == 2) {
      mulherFrontend++;
    }
  }

  if (genero == 2 || genero == 5) {
    if (stack == 3 && idade > 40) {
      homemMobile++;
    }
  }

  if (genero == 3 && stack == 4 && idade < 30) {
    naoBinarioFull++;
  }

  somaIdade += idade;
  total++;

  continua = leia.keyInYNStrict(
    "\nDeseja continuar a leitura de um novo colaborador: ",
    {
      limitMessage: "Digite um valor valido",
    }
  );

  if (continua == false) {
    console.log(`\nTotal de pessoas desenvolvedoras backend: ${backEnd}`);
    console.log(
      `\nTotal de mulheres cis e trans desenvolvedoras frontend: ${mulherFrontend}`
    );
    console.log(
      `\nO número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homemMobile}`
    );
    console.log(
      `\nO número de Não Binários desenvolvedores FullStack menores de 30 anos: ${naoBinarioFull}`
    );
    console.log(
      `\nO número total de pessoas que responderam à pesquisa: ${total}`
    );
    console.log(
      `\nA média de idade das pessoas que responderam à pesquisa: ${
        somaIdade / total.toFixed(2)
      }`
    );
  }
}
