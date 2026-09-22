function destacar() {
    var nomeInput = document.getElementById("nome").value.trim();
    var listaDeNomes = document.getElementById("listaDeNomes").getElementsByTagName("li");

    for (var i = 0; i < listaDeNomes.length; i++) {
        if (listaDeNomes[i].textContent === nomeInput) {
            listaDeNomes[i].innerHTML = `<span class="destacado">${listaDeNomes[i].textContent}</span>`;
        } else {
            listaDeNomes[i].innerHTML = listaDeNomes[i].textContent;
        }
    }
}