function verificar() {
    const velocidade = Number(document.getElementById('velocidade').value);
    const resultado = document.getElementById('resultado');
    const multa = document.getElementById('multa');
    const limite = 80;

    resultado.innerHTML = `Sua velocidade atual é de ${velocidade} km/h.<br><br>`;

    if (velocidade > limite) {
        multa.innerHTML = "Velocidade acima do permitido! <strong>MULTADO.</strong>";
    } else {
        multa.innerHTML = "Velocidade dentro do permitido. Dirija com segurança!";
    }

    document.getElementById('resultado').innerHTML = mensagem;
}