const formulario = document.getElementById("formulario");
const resultadoJSON = document.getElementById("json");
const tabela = document.getElementById("tabela");
const mensagem = document.getElementById("mensagem");

const emailsCadastrados = [];

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    mensagem.textContent = "";

    const dados = new FormData(formulario);
    const objeto = {};
    for (const [chave, valor] of dados) {
    objeto[chave] = valor;
    }

    const email = objeto.email.toLowerCase();
    if (emailsCadastrados.includes(email)) {
    mensagem.textContent = "E-mail já cadastrado";
    return;
    }
    emailsCadastrados.push(email);
    resultadoJSON.textContent = JSON.stringify(objeto);
    const linha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    colunaNome.textContent = objeto.nome;

    const colunaEmail = document.createElement("td");
    colunaEmail.textContent = objeto.email;

    const colunaIdade = document.createElement("td");
    colunaIdade.textContent = objeto.idade;

    const colunaCurso = document.createElement("td");
    colunaCurso.textContent = objeto.curso;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaEmail);
    linha.appendChild(colunaIdade);
    linha.appendChild(colunaCurso);

    tabela.appendChild(linha);

    formulario.reset();
});