// 02) crescente.js: Defina um vetor com 3 valores inteiros e atribua valores a eles. 
// Envie-o a uma função, que deve fazer comparações e retornar uma mensagem ao usuário, 
// informando estes números em ordem crescente.

const numeros = [8, 3, 5];

function ordenarCrescente(numeros) {
    numeros.sort();

    return `Números em ordem crescente: ${numeros.join(", ")}`;
}

console.log(ordenarCrescente(numeros));