// 05) trasprafrente.js: Defina um vetor de 5 elementos inteiros. 
// Utilize uma estrutura de repetição para imprimir os elementos 
// do vetor de trás para frente.

const numeros = [10, 20, 30, 40, 50];

for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
}