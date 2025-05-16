import api from "./api";



export async function loginUser(username, password, navigate) {
    try {
        const response = await api.post('login/', {
            username: username,
            password: password,
        })
        let token = response.data.token
        localStorage.setItem('userToken', token)
        console.log(response.status, response.data)
        console.log('Sucesso!')

        try { //verificar se usuário tem um perfil
            const response = await api.get('verificar-perfil/', {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            const perfil = response.data.perfil_existente
            console.log(perfil)
            if (perfil) {
                navigate('/inicio')
            } else {

                navigate('/perfil')
            }
        } catch (error) {
            console.log('Erro ao verificar perfil!')
        }


    } catch (error) {
        console.log('Usuário ou senha incorretos!')
    }
}

export async function RegisterUser(username, password, confirm, navigate) {
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
        alert('Sucesso ao cadastrar usuário.')
        navigate('/login')
    } catch (error) {
        console.log(error)
        alert('Erro ao cadastrar usuário.')
    }
}

export async function registerProfile(name, cpf, city, dateN, classe, navigate) {
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
        alert('Sucesso ao cadastrar perfil!, Seja bem vindo!')
        navigate('/inicio')
    } catch (error) {
        console.log(error)
        alert('Erro ao cadastrar perfil, tente novamente!')
    }
}

export function logout(navigate) {
    localStorage.removeItem('userToken')
    localStorage.removeItem('vendaId')
    navigate('/')
}

export function verificarToken(navigate) {
    const token = localStorage.getItem('userToken')
    if (!token) {
        navigate('/login')
    }
}