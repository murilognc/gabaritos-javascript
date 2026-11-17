const usuarios = document.getElementById('usuarios');
const posts = document.getElementById('posts');
const detalhes = document.getElementById('detalhes');
carregarUsuarios();

async function carregarUsuarios() {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
    const dados = await resposta.json();

    dados.forEach(user => {
      const opt = document.createElement('option');
      opt.value = user.id;
      opt.textContent = user.name;
      usuarios.appendChild(opt);
    });
  } catch (erro) {
    alert('Erro ao carregar usuários');
    console.error(erro);
  }
}


async function carregarPosts() {
  try {
    const userId = usuarios.value;
    detalhes.innerHTML = '';

    const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const dados = await resposta.json();

    posts.innerHTML = '';
    dados.forEach(post => {
      const btn = document.createElement('button');
      btn.className = 'post';
      btn.textContent = post.title;
      btn.setAttribute('onclick', `mostrarDetalhes(${post.id})`);
      posts.appendChild(btn);
    });
  } catch (erro) {
    alert('Erro ao carregar postagens');
    console.error(erro);
  }
}

async function mostrarDetalhes(postId) {
  try {
    const postResp = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await postResp.json();

    const commentsResp = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await commentsResp.json();

    detalhes.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <h4>Comentários:</h4>
      <ul>
        ${comments.map(c => `<li class="comment"><strong>${c.name}:</strong> ${c.body}</li>`).join('')}
      </ul>
    `;
  } catch (e) {
    alert('Erro ao carregar detalhes');
    console.error(e);
  }
}


