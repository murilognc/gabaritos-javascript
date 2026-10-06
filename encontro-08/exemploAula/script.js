const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const teclasPressionadas = {};
let jogoEncerrado = false;

const jogador = {
    x: 100,
    y: 100,
    largura: 40,
    altura: 40,
    velocidade: 10,
    direcaoX: 1,
    direcaoY: 1
};

const inimigo = {
    x: 500,
    y: 200,
    largura: 40,
    altura: 40,
    direcao: 1,
    velocidade: 2
};

function configurarControles() {
    document.addEventListener("keydown", (event) => {
        teclasPressionadas[event.key] = true;
    });

    document.addEventListener("keyup", (event) => {
        teclasPressionadas[event.key] = false;
    });
}

function desenharRetangulo(entidade, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(
        entidade.x,
        entidade.y,
        entidade.largura,
        entidade.altura
    );
}

function limparTela() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function desenharJogador() {
    desenharRetangulo(jogador, "blue");
}

function desenharInimigo() {
    desenharRetangulo(inimigo, "red");
}

function desenharMensagemGameOver() {
    if (!jogoEncerrado) {
        return;
    }

    ctx.fillStyle = "red";
    ctx.font = "50px Arial";
    ctx.fillText("GAME OVER", 250, 250);
}

function desenharCena() {
    limparTela();
    desenharJogador();
    desenharInimigo();
    desenharMensagemGameOver();
}

function moverJogador() {
    const movimentos = {
        ArrowUp: [0, -1],
        ArrowDown: [0, 1],
        ArrowLeft: [-1, 0],
        ArrowRight: [1, 0]
    };

    Object.entries(movimentos).forEach(([tecla, [direcaoX, direcaoY]]) => {
        if (teclasPressionadas[tecla]) {
            jogador.x += direcaoX * jogador.velocidade;
            jogador.y += direcaoY * jogador.velocidade;
        }
    });
}

function limitarJogadorNaTela() {
    jogador.x = Math.max(
        0,
        Math.min(jogador.x, canvas.width - jogador.largura)
    );
    jogador.y = Math.max(
        0,
        Math.min(jogador.y, canvas.height - jogador.altura)
    );
}

function moverInimigo() {
    inimigo.x += inimigo.velocidade * inimigo.direcao;

    if (inimigo.x + inimigo.largura >= canvas.width) {
        inimigo.direcao = -1;
    }

    if (inimigo.x <= 0) {
        inimigo.direcao = 1;
    }
}

function atualizarEstado() {
    moverJogador();
    limitarJogadorNaTela();
    moverInimigo();

    if (verificarColisao(jogador, inimigo)) {
        jogoEncerrado = true;
    }
}

function verificarColisao(a, b) {
    return (
        a.x < b.x + b.largura &&
        a.x + a.largura > b.x &&
        a.y < b.y + b.altura &&
        a.y + a.altura > b.y
    );
}

function iniciarLoopDoJogo() {
    atualizarEstado();
    desenharCena();
    requestAnimationFrame(iniciarLoopDoJogo);
}

configurarControles();
iniciarLoopDoJogo();
