function filtrarLista() {
    let input = document.getElementById("search").value.toLowerCase();
    let itens = document.getElementById("lista").getElementsByTagName("li");

    for (let i = 0; i < itens.length; i++) {
        let texto = itens[i].textContent.toLowerCase();
        itens[i].style.display = texto.includes(input) ? "" : "none";
    }
}