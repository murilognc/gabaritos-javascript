function confirmarPresenca() {
    let listaAlunos = document.getElementById("listaAlunos");
    let checkboxes = listaAlunos.getElementsByTagName("input");
    let presentes = [];
    let ausentes = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            presentes.push(`<span class="presente">${checkboxes[i].value}</span>`);
        } else {
            ausentes.push(`<span class="ausente">${checkboxes[i].value}</span>`);
        }
    }

    document.getElementById("resultado").innerHTML = 
        `<b>Presentes:</b> ${presentes.join(", ")}<br>
            <b>Ausentes:</b> ${ausentes.join(", ")}`;
}