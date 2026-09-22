function verificar_dados(){
    var n = Number (document.getElementById("ano_nasc").value)
    let mensagem = document.getElementById("mensagem")
    let imagem = document.getElementById("imagem")
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - n;
    let selecionado;
    const masculino = document.getElementById("masculino");
    const feminino = document.getElementById("feminino");

    if (masculino.checked) {
        selecionado = masculino;
    } else if (feminino.checked) {
        selecionado = feminino;
    }

    if (isNaN(n) || n < 1900 || n > anoAtual) {
        mensagem.textContent = "Por favor, insira um ano de nascimento válido!";
        imagem.style.display = "none";
        return;
    }

    if (!selecionado) {
        mensagem.textContent = "Por favor, selecione um gênero.";
        imagem.style.display = "none";
        return;
    }

    let genero = selecionado.value;
    let categoria = "";
    let srcImagem = "";

    if (idade <= 2) {
        categoria = "bebê";
        srcImagem = genero === "masculino" ? "bebe_menino.jpg" : "bebe_menina.jpg";
    } else if (idade <= 12) {
        categoria = "criança";
        srcImagem = genero === "masculino" ? "menino.jpg" : "menina.jpeg";
    } else if (idade <= 17) {
        categoria = "adolescente";
        srcImagem = genero === "masculino" ? "adolescente_homem.jpg" : "adolescente_mulher.jpg";
    } else if (idade <= 59) {
        categoria = genero === "masculino" ? "adulto" : "adulta";
        srcImagem = genero === "masculino" ? "adulto.jpg" : "adulta.jpg";
    } else {
        categoria = genero === "masculino" ? "idoso" : "idosa";
        srcImagem = genero === "masculino" ? "idoso.jpg" : "idosa.jpg";
    }
    

    mensagem.innerHTML = `Detectamos ${categoria} de ${idade} anos.`;
    imagem.src = srcImagem;
    imagem.style.display = "inline";
}