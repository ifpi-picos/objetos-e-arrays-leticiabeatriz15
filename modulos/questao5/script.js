import {adiciona, remove, exibe, atualize, dados} from './funcoes';

let repete = true

while(repete){

    if(dados.length != 0){
        console.log('Lista de usuários cadastrados:')
        exibe()
    }

    const menu = Number(prompt('CADASTRO\n1 - Adicionar\n2 - Remover\n3 - Atualizar\n5 - Encerrar programa\n--> '))
    
    switch(menu){
        case 1:
            let name = prompt('Digite seu nome:\n').trim();
            let mail = prompt('Digite o seu e-mail:\n').trim();
            let sen = prompt('Digite sua senha:\n').trim()
            adiciona(name, mail, sen)
            break;

        case 2: 
            remove()
            break;

        case 3:
            atualize()
            break;
            
        default:
            console.log('PROGRAMA ENCERRADO!')
            repete = false
    }
}