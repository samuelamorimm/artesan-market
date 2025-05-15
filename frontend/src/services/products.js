import api from "./api";

export async function criarProduto(nome, imagem, preco, categoria) {
  if (!nome || !imagem || !preco || !categoria) {
    alert('Insira os dados do produto corretamente!')
    return;
  }

  const token = localStorage.getItem('userToken')
  if (!token) {
    console.log('Token não encontrado.')
    return;
  }

  const formData = new FormData()
  formData.append('nome', nome)
  formData.append('imagem', imagem)
  formData.append('preco', parseFloat(preco))
  formData.append('categoria', parseInt(categoria))

  try {
    const response = await api.post('produtos/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Token ${token}`
      }
    })
    alert("Produto publicado com êxito!")
  } catch (error) {
    console.log('Erro ao publicar produto: ', error)
  }
}

export async function pegarProdutos(setProdutos) {
  const token = localStorage.getItem('userToken')
  if (!token) {
    console.log('Token não encontrado.')
    return;
  }

  try {
    const response = await api.get('/produtos-geral', {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    setProdutos(response.data)
    console.log('Produtos:', response.data)
  } catch (error) {
    console.log('Ocorreu um erro ao buscar produtos. ', error)
  }
}