//Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.

const nome = prompt('Digite seu nome completo --> ')

const array = nome.split(' ')
const print = `Ola ${array[0]} ${array[array.length - 1]}`
console.log(print)