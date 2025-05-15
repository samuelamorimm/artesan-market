import api from "./api";

export async function loginUser(username, password) {
    try {
        const response = await api.post('login/', {
            username: username,
            password: password,
        })
        console.log(response.status, response.data)
        console.log('Sucesso')
        
    } catch (error) {
        console.log('Usuário ou senha incorretos!')
    }
}

export async function RegisterUser(username, password, confirm) {
    if (!username || !password || !confirm || !classe) {
        alert('Insira seus dados corretamente!')
        return;
    }

    console.log(username, password, confirm)

    try {
        const response = await api.post('register/', {
            username: username,
            email: username,
            password: password,
        })

        console.log(response.status, response.data)
        console.log('Sucesso ao cadastrar usuário.')
    } catch (error) {
        console.log(error)
        console.log('Erro ao cadastrar usuário.')
    }
}

export async function registerProfile(name, cpf, cidade, dataNasc, classe) {
    console.log(
        name, '\n',
        cpf, '\n',
        cidade, '\n',
        dataNasc, '\n',
        classe, '\n',
    )
} 