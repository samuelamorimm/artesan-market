import api from "./api";

export async function criarVenda(idVendedor, quantidade, idProduto) {
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
    } catch (error) {
      console.log('Erro ao criar item', error)
    }
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
    localStorage.setItem('vendaId', response.data.id.toString())
  } catch (error) { //venda
    console.log('Erro ao criar venda.', error)
  }
}