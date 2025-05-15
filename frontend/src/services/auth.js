import api from "./api";

export async function loginUser(username, password) {
    try {
        const response = await api.post('login/', {
            username: username,
            password: password,
        })
        const token = response.data.token
        localStorage.setItem('userToken', token)
        console.log(response.status, response.data)
        console.log('Sucesso')
    } catch (error) {
        console.log('Usuário ou senha incorretos!')
    }
}

export async function RegisterUser(username, password, confirm) {
    if (!username || !password || !confirm) {
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

export async function registerProfile(name, cpf, city, dateN, classe) {
    console.log(
        name, '\n',
        cpf, '\n',
        city, '\n',
        dateN, '\n',
        classe, '\n',
    )

    const token = localStorage.getItem('userToken')
    if (!token) {
        console.log('Token não encontrado.')
        return;
    }
    console.log('Token ', token)

    try {
        const response = await api.post('perfil/', {
            cpf: cpf,
            nome: name, 
            cidade: city, 
            data_nascimento: dateN, 
            status: classe,
        }, {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        console.log(response.data)
        console.log('Sucesso ao cadastrar perfil!, Seja bem vindo!')
    } catch (error) {
        console.log(error)
        console.log('Erro ao cadastrar perfil, tente novamente!')
    }
} 