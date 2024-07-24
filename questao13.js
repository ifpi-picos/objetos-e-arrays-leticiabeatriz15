// Escreva um programa que solicita ao usuário o nome de 5 filmes e
// armazene em um array. Em seguida, exiba no console os filmes
// informados.


const filmes = []

for(let i = 0; i < 5; i++){

    const filme = prompt(`Digite o nome do ${i+1}° filme:`).trim()
 
    filmes.push(filme)

};

console.log(`Os filmes informados são: ${filmes}`)