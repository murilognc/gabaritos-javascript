// 07) carros.js: Crie um array chamado carros, 
// onde cada elemento seja um objeto com marca, modelo e ano. 
// Exiba no console apenas os carros fabricados depois de 2015.

const carros = [
    { marca: "Toyota", modelo: "Corolla", ano: 2018 },
    { marca: "Honda", modelo: "Civic", ano: 2015 },
    { marca: "Volkswagen", modelo: "Nivus", ano: 2020 },
    { marca: "Ford", modelo: "Ka", ano: 2014 },
    { marca: "Chevrolet", modelo: "Onix", ano: 2019 }
];

for (let i = 0; i < carros.length; i++) {
    if (carros[i].ano > 2015) {
        console.log(
            `Marca: ${carros[i].marca} | Modelo: ${carros[i].modelo} | Ano: ${carros[i].ano}`
        );
    }
}