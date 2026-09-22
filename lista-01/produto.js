// 08) produto.js: Crie um objeto produto com propriedades nome, preco e estoque. 
// Percorra o objeto com for...in e exiba as propriedades e seus valores.

const produto = {
    nome: "Placa de Vídeo MSI RTX 5060 Shadow 2X OC NVIDIA GeForce, 8GB, GDDR7, 128-bit - 912-V537-038",
    preco: 2799.99,
    estoque: 10
};

for (let propriedade in produto) {
    console.log(`${propriedade}: ${produto[propriedade]}`);
}