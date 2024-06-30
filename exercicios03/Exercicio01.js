let leia = require("readline-sync");

//variaveis globais
let numeroA, numeroB, i;

//lê o intervalo do usuario
numeroA = leia.questionInt("\nDigite o numero A: ", {
  limitMessage: "Digite um numero válido",
});
numeroB = leia.questionInt("\nDigite o numero B: ", {
  limitMessage: "Digite um numero válido",
}); 

//calcula os numeros multiplos de 3 e 5 no intervalo
if(numeroA > numeroB){
    console.log("Intervalo invalido")
}else{
    for(i = numeroA; i <= numeroB; i++){
        if(i % 3 == 0 && i % 5 == 0){
          
          //mostra no console o resultado

            console.log(`${i} é multiplo de 3 e 5`)
        }
    }
}
