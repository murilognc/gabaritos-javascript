// 04) media.js: Defina um vetor de 5 elementos inteiros. 
// Utilize uma estrutura de repetição para calcular a média 
// entre esses elementos e escreva uma mensagem ao usuário informando este valor.

const numeros = [10, 8, 7, 9, 6];

function calcularMedia(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    const media = soma / numeros.length;

    return `A média dos números é: ${media}`;
}

console.log(calcularMedia(numeros));