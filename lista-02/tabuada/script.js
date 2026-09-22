 function mostrarTabuada() {
    var numero = document.getElementById("numero");
    var resultado = document.getElementById("resultado");

    for (var i = 0; i <= 10; i++) {
        var div = document.createElement("p");
        div.innerText = Number(numero.value) * i;
        resultado.appendChild(div);
    }
}