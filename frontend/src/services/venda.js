import api from "./api";

export async function criarVenda(idVendedor, quantidade, idProduto) {

  if (!idVendedor || !quantidade || !idProduto) {
    console.log('algo faltando')
    return;
  }
  const token = localStorage.getItem('userToken')
  if (!token) {
    console.log('Token não encontrado.')
    return;
  }

  const vendaId = localStorage.getItem("vendaId")

  if (vendaId) {
    // chama a função de adicionar item passando o id da venda
    try {
      const response = await api.post('itens-venda/', {
        quantidade: quantidade,
        venda: vendaId,
        produto: idProduto,
      }, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      console.log('produto criado:', response.data)
    } catch (error) {
      console.log('Erro ao criar item', error)
    }
    return;
  }

  try { // inicia uma venda

    const response = await api.post('vendas/', {
      vendedor: idVendedor,
    }, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    console.log(response.data)
    let venda = response.data.id
    localStorage.setItem('vendaId', response.data.id.toString())
    try {
      const response = await api.post('itens-venda/', {
        quantidade: quantidade,
        venda: venda,
        produto: idProduto,
      }, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
    } catch (error) {
      console.log('Erro ao criar item', error)
    }
  } catch (error) { //venda
    console.log('Erro ao criar venda.', error)
  }
}