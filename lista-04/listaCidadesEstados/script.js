const estados = document.getElementById('estados');
const cidades = document.getElementById('cidades');
const resultado = document.getElementById('resultado');

carregarEstados();

async function carregarEstados() {
  try {
    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
    const dados = await resposta.json();

    dados.forEach(estado => {
      const opt = document.createElement('option');
      opt.value = estado.sigla;
      opt.textContent = estado.nome;
      estados.appendChild(opt);
    });
  } catch (erro) {
    alert('Erro ao carregar os estados.');
    console.error(erro);
  }
}

async function carregarCidades() {
  try {
    const uf = estados.value;
    const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
    const municipios = await resposta.json();

    cidades.innerHTML = '';
    municipios.forEach(cidade => {
      const opt = document.createElement('option');
      opt.value = cidade.nome;
      opt.textContent = cidade.nome;
      cidades.appendChild(opt);
    });
  } catch (erro) {
    alert('Erro ao carregar as cidades.');
    console.error(erro);
  }
}

function mostrarResultado() {
  const estadoTexto = estados.options[estados.selectedIndex].text;
  const cidadeTexto = cidades.value;
  resultado.textContent = `Você selecionou: ${cidadeTexto} - ${estadoTexto}`;
}