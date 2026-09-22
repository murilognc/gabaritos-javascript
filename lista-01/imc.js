// 03) imc.js: Defina duas variáveis numéricas, peso e altura. 
// Crie uma função que recebe esses valores e calcula o índice 
// de Massa Corporal do usuário, considerando a fórmula abaixo.
// Se o IMC estiver entre <18,5 e 24,9> a função deve retornar uma mensagem,
// indicando que o usuário está com seu IMC ideal. 
// Caso contrário, diga que ele precisa se cuidar. 

const peso = 70;
const altura = 1.75;

function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);

    if (imc >= 18.5 && imc <= 24.9) {
        return `IMC: ${imc} - Seu IMC está ideal.`;
    } else {
        return `IMC: ${imc} - Você precisa se cuidar.`;
    }
}

console.log(calcularIMC(peso, altura));