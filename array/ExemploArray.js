let leia = require("readline-sync");

let vetorString = [
  "Boxer",
  "Pastor Alemão",
  "Pinscher",
  "Husky Siberiano",
  "Corgi",
];

let numeros = [4, 2, 5, 10, 99, 40, 33, 25];

for (let i = 0; i < vetorString.length; i++) {
  console.log(`Posição[${i}] = ${vetorString[i]}`);
}

// for (let i = 0; i < vetorString.length; i++) {
//   numeros[i] = leia.questionInt("Digite um numero: ", {
//     limitMessage: "Digite um numero valido",
//   });
// }

// console.table(numeros)

//ordem crescente
console.table(vetorString.sort())

console.table(numeros.sort())

console.table(numeros.sort(compareAsc))

//ordem decrescente
console.table(numeros.sort(compareAsc).reverse())


function compareAsc(a, b) {
  return a - b ;
}
