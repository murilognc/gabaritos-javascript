const posts = [
      { userId: 1, id: 1, title: "Primeiro post", body: "Aprendendo a manipular o DOM." },
      { userId: 1, id: 2, title: "Segundo post", body: "Arrays de objetos são parecidos com o JSON de uma API." },
      { userId: 2, id: 3, title: "Terceiro post", body: "Em breve vamos buscar estes dados no servidor." },
      { userId: 2, id: 4, title: "Quarto post", body: "O método find devolve o primeiro item encontrado." },
      { userId: 3, id: 5, title: "Quinto post", body: "Se nada for encontrado, find devolve undefined." }
    ];

    const campoId = document.getElementById("idPost");
    const botaoBuscar = document.getElementById("buscar");
    const resultado = document.getElementById("resultado");

    botaoBuscar.addEventListener("click", function() {
      const valor = campoId.value;

      if (valor === "") {
        resultado.textContent = "Digite um ID.";
        return;
      }

      const post = {};
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === parseInt(valor)) {
          post.title = posts[i].title;
          post.body = posts[i].body;
          break;
        }
      }
      resultado.innerHTML = "";

      if (post.title && post.body) {
        const titulo = document.createElement("h2");
        titulo.textContent = post.title;

        const corpo = document.createElement("p");
        corpo.textContent = post.body;

        resultado.appendChild(titulo);
        resultado.appendChild(corpo);
      } else {
        const erro = document.createElement("p");
        erro.classList.add("erro");
        erro.textContent = `Post não encontrado (ID ${valor}). Os IDs válidos vão de 1 a 5.`;
        resultado.appendChild(erro);
      }
    });