//Crie uma string com o seu nome e imprima o número de caracteres.

const nome = 'Letícia Beatriz de Holanda Vieira'

let pop = nome.split(' ')
let conte = ''
for(let i = 0; i < (pop.length); i++){
    conte = conte + pop[i]
}

console.log('Seu nome tem: '+ conte.length + ' caracteres!')