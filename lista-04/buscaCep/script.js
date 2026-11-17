async function buscarCEP() {
  const cep = document.getElementById('cep').value.trim();

  document.getElementById('cep').textContent = '';
  document.getElementById('logradouro').textContent = '';
  document.getElementById('bairro').textContent = '';
  document.getElementById('cidade').textContent = '';
  document.getElementById('estado').textContent = '';
  document.getElementById('erro').style.display = 'none';

  if (!cep) {
    alert('Digite um CEP válido.');
    return;
  }

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      document.getElementById('erro').style.display = '';
    } else {
      document.getElementById('cep-value').textContent = dados.cep;
      document.getElementById('logradouro').textContent = dados.logradouro;
      document.getElementById('bairro').textContent = dados.bairro;
      document.getElementById('cidade').textContent = dados.localidade;
      document.getElementById('estado').textContent = dados.uf;
    }
  } catch (erro) {
    document.getElementById('erro').style.display = 'none';
  }
}
