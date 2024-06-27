let leia = require("readline-sync");

//variaveis globais
let palavra1;
let palavra2;
let palavra3;

//lê as caracteristicas do animal
palavra1 = leia.question("\nO animal e vertebrado ou invertebrado? ", {
  limitMessage: "Digite uma palavra valida",
});
palavra2 = leia.question("\nQual e a especie do animal? ", {
  limitMessage: "Digite uma palavra valida",
});
palavra3 = leia.question("\nQual e o tipo de animal? ", {
  limitMessage: "Digite uma palavra valida",
});

//mostra qual animal se encaixa com as especificações
if(palavra1.toLowerCase() == "vertebrado"){
    if(palavra2.toLowerCase() == "ave"){
        if(palavra3.toLowerCase() == "carnivoro"){
            console.log("Aguia")
        }else{
            console.log("Pomba")
        }
    }else{
        if(palavra3.toLowerCase() == "onivoro"){
            console.log("Homem")
        }else{
            console.log("Vaca")
        }
    }
}else if(palavra1 == "invertebrado"){
    if(palavra2.toLowerCase() == "inseto"){
        if(palavra3.toLowerCase() == "hematofago"){
            console.log("Pulga")
        }else{
            console.log("Lagarta")
        }
    }else{
        if(palavra3.toLowerCase() == "hematofago"){
            console.log("Sanguessuga")
        }else{
            console.log("Minhoca")
        }
    }
}else{
    console.log("Animal inválido")
}
