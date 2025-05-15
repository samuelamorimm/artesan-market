import api from "./api";

export async function verificarStatus(navigate) {
    const token = localStorage.getItem('userToken')
    if (!token) {
        console.log('Token não encontrado.')
        return;
    }

    try {
        const response = await api.get('perfil/', {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        console.log(response.data)
        const statusPerfil = response.data[0].status
        if (statusPerfil === 'V') {
            navigate('/painel')
        }
    } catch (error) {
        console.log("Erro ao verificar status do perfil")
    }
}

export async function pegarPerfil(setData) {
    const token = localStorage.getItem('userToken')
    if (!token) {
        console.log('Token não encontrado.')
        return;
    }

    try {
        const response = await api.get('perfil/', {
            headers: {
                Authorization: `Token ${token}`
            }
        })
        console.log(response.data)
        setData(response.data)
    } catch (error) {
        console.log('Erro ao buscar perfil: ', error)
    }
}