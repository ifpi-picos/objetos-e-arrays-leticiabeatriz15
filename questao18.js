//Crie um array de objetos representando carros, cada um com propriedades nome e ano, e use filter para criar um novo array contendo apenas os carros fabricados após o ano 2010.

const carros = [
    {nome: 'Toyota Corolla', ano: 2023},
    {nome: 'Honda Civic', ano: 2023},
    {nome: 'Audi A4', ano: 2010},
    {nome: 'Chevrolet Camaro', ano: 2010},
    {nome: 'Volkswagen Golf', ano: 2023}
]

const ano10 = carros.filter((carro) => carro.ano > 2010)

console.log(ano10)