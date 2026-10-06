const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const mensagem = document.getElementById("mensagem");

const tirosElemento = document.getElementById("tiros");
const acertosElemento = document.getElementById("acertos");
const restantesElemento = document.getElementById("restantes");

const botaoReiniciar = document.getElementById("reiniciar");

const tamanhoTabuleiro = 10;
const tamanhoCelula = canvas.width / tamanhoTabuleiro;

let tabuleiro;
let tiros;
let acertos;
let naviosRestantes;
let jogoTerminado;

function criarTabuleiro() {
    tabuleiro = [];

    for (let linha = 0; linha < tamanhoTabuleiro; linha++) {
        const novaLinha = [];
        for (let coluna = 0; coluna < tamanhoTabuleiro; coluna++) {
            novaLinha.push({
                navio: false,
                atingido: false
            });
        }
        tabuleiro.push(novaLinha);
    }
}

function posicionarNavios() {
    colocarNavio(1, 1, 3, "horizontal");
    colocarNavio(5, 2, 3, "vertical");
    colocarNavio(7, 7, 2, "horizontal");
}

function colocarNavio(linha, coluna, tamanho, direcao) {

    for (let i = 0; i < tamanho; i++) {
        let novaLinha = linha;
        let novaColuna = coluna;

        if (direcao === "horizontal") {
            novaColuna += i;
        } else {
            novaLinha += i;
        }

        if (
            novaLinha >= tamanhoTabuleiro ||
            novaColuna >= tamanhoTabuleiro
        ) {
            console.log("Navio fora do tabuleiro!");
            return;
        }
        tabuleiro[novaLinha][novaColuna].navio = true;
    }
}

function desenharTabuleiro() {
    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );
    for (let linha = 0; linha < tamanhoTabuleiro; linha++) {
        for (let coluna = 0; coluna < tamanhoTabuleiro; coluna++) {
            const celula = tabuleiro[linha][coluna];
            const x = coluna * tamanhoCelula;
            const y = linha * tamanhoCelula;
            ctx.fillStyle = "#3498db";

            ctx.fillRect(
                x,
                y,
                tamanhoCelula,
                tamanhoCelula
            );

            if (celula.atingido) {
                if (celula.navio) {
                    ctx.fillStyle = "#e74c3c";
                } else {
                    ctx.fillStyle = "#ecf0f1";
                }
                ctx.fillRect(
                    x + 3,
                    y + 3,
                    tamanhoCelula - 6,
                    tamanhoCelula - 6
                );
            }

            ctx.strokeStyle = "#ffffff";
            ctx.strokeRect(
                x,
                y,
                tamanhoCelula,
                tamanhoCelula
            );
        }
    }
}

canvas.addEventListener("click", function(event) {
    if (jogoTerminado) {
        return;
    }

    const rect = canvas.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const coluna = Math.floor(x / tamanhoCelula);
    const linha = Math.floor(y / tamanhoCelula);
    atacar(linha, coluna);
});

function atacar(linha, coluna) {
    const celula = tabuleiro[linha][coluna];

    if (celula.atingido) {
        mensagem.textContent ="Você já atacou essa posição!";
        return;
    }

    celula.atingido = true;
    tiros++;

    if (celula.navio) {
        acertos++;
        naviosRestantes--;
        mensagem.textContent ="ACERTOU UM NAVIO!";
    } else {
        mensagem.textContent ="ÁGUA!";
    }

    atualizarInformacoes();
    desenharTabuleiro();
    verificarFimDeJogo();
}

function verificarFimDeJogo() {
    if (naviosRestantes === 0) {
        jogoTerminado = true;
        mensagem.textContent ="PARABÉNS! Você destruiu todos os navios!";
    }
}

function atualizarInformacoes() {
    tirosElemento.textContent = tiros;
    acertosElemento.textContent = acertos;
    restantesElemento.textContent = naviosRestantes;
}

function reiniciarJogo() {
    tiros = 0;
    acertos = 0;
    naviosRestantes = 8;
    jogoTerminado = false;
    criarTabuleiro();
    posicionarNavios();
    atualizarInformacoes();
    mensagem.textContent ="Clique em uma posição para atacar!";
    desenharTabuleiro();
}

botaoReiniciar.addEventListener("click", function() {
    reiniciarJogo();
});

reiniciarJogo();