// 06) maior_menor.js: Defina um vetor de 5 elementos inteiros. 
// Utilize uma estrutura de repetição para informar qual 
// é o maior e o menor valor deste vetor ao usuário.

const numeros = [10, 25, 7, 42, 18];

let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }

    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);