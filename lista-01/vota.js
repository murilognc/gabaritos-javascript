// 01) vota.js: Defina duas variáveis, nome e idade e atribua valores a elas. 
// Com base nessas informações, crie uma função que recebe estes valores e imprime uma mensagem, 
// indicando se o usuário poderá ou não votar esse ano com base em sua idade.

const nome = "João da Silva";
const idade = 18;

function verificarVoto(nome, idade) {
    if (idade >= 16) {
        console.log(`${nome} poderá votar este ano.`);
    } else {
        console.log(`${nome} não poderá votar este ano.`);
    }
}

verificarVoto(nome, idade);