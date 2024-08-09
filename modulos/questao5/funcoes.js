export const dados = []

function id(){
    if(dados.length == 0){
        return 0
    }else{
        return dados[dados.length - 1].id + 1
    }
}

export function adiciona(nome, email, senha){
    dados.push({Nome: nome, Email: email, Senha: senha, id: id()})
}


export function remove(){
    console.log()
    exibe()

    const id = Number(prompt('Qual o número do usuário deseja remover?\n-> '))

    const pessoa = dados.findIndex(((pessoa) => pessoa.id == id))
    if(pessoa != -1){
        dados.splice(id, 1)
        console.log('USUÁRIO REMOVIDO!')
    }else{
        console.log('USUÁRIO NÃO ENCONTRADO!')
    }
}

export function exibe(){
    const exibir = []
    for(let i = 0; i < dados.length; i++){       
        let pessoa = dados[i].Nome.charAt(0).toUpperCase() + dados[i].Nome.slice(1).toLowerCase() //Essa variável padroniza as palavras para que fique a primeira letra maiúscula e o restante minúscula

        exibir.push({'\x1b[35m\x1b[4mUsuário\x1b[0m\x1b[0m': pessoa, '\x1b[35m\x1b[4mEmail\x1b[0m\x1b[0m': dados[i].Email})
    }
    console.table(exibir)

}

export function atualize(){
    const id = Number(prompt('Qual o número do usuário deseja modificar?\n-> '))

    const pessoa = dados.findIndex(((pessoa) => pessoa.id == id))

    if(pessoa != -1){

        let edite = true
        while(edite){

            const opc = Number(prompt('O que deseja editar?\n1 - Nome\n2 - Email\n3 - Senha\n0 - Encerrar alterações\n-> '))

            switch(opc){
                case 1:
                    const name = prompt('Digite o nome\n-> ').trim()
                    dados[pessoa].Nome = name

                    console.log('\nNome do usuário alterado!')
                    exibe()
                    break;

                case 2:
                    const mail = prompt('Digite o novo e-mail\n-> ')
                    dados[pessoa].Email = mail

                    console.log('\nEmail do usuário alterado!')
                    exibe()
                    break;

                case 3:
                    const nvSenha = prompt('Digite sua nova senha\n-> ')
                    dados[pessoa] = nvSenha
                    console.log('Senha Alterada!')
                    break;

                default:
                    console.log('Modo de edição do usuário finalizado!')
                    edite = false
            }

        }

    }else{
        console.log('USUÁRIO NÃO ENCONTRADO!')
    }
}