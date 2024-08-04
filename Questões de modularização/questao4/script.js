import {soma, subtrai, multiplica, divide, exponencia} from './contas.js';

const menu = Number(prompt(`
    Escolha que operação com 2 números deseja realizar:
    1 - Soma
    2 - Subtração
    3 - Multiplicação
    4 - Divisão
    5 - Exponenciação
    --> `))

    if(menu == 1){
        const x = Number(prompt('Digite o 1° número:\n'));
        const y = Number(prompt('Digite o 2° número:\n'));
        console.log(`O resultado da soma de ${x} + ${y} é igual a -> ${soma(x, y)}`)

    }else if(menu == 2){
        const x = Number(prompt('Digite o 1° número:\n'))
        const y = Number(prompt('Digite o 2° número:\n'))
        console.log(`O resultado da subtração de ${x} - ${y} é igual a -> ${subtrai(x, y)}`)

    }else if(menu == 3){
        const x = Number(prompt('Digite o 1° número:\n'))
        const y = Number(prompt('Digite o 2° número:\n'))
        console.log(`O resultado da multiplicação de ${x} x ${y} é igual a -> ${multiplica(x, y)}`)

    }else if(menu == 4){
        const x = Number(prompt('Digite o 1° número:\n'))
        const y = Number(prompt('Digite o 2° número:\n'))
        console.log(`O resultado da divisão de ${x} : ${y} é igual a -> ${divide(x, y)}`)

    }else if(menu == 5){
        const x = Number(prompt('Digite o 1° número:\n'))
        const y = Number(prompt('Digite o 2° número:\n'))
        console.log(`O resultado da esponenciação de ${x}^${y} é igual a -> ${exponencia(x, y)}`)

    }else{
        console.log('OPERAÇÃO INVÁLIDA!')
    }