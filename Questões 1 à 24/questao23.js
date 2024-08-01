//Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome.

const nome = prompt('Digite seu nome completo? ')

const array = nome.split(' ')

console.log(`Seu primeiro nome é ${array[0]}!`)