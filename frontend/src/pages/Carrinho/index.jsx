
import TopBar from "../../components/TopBar";
import styles from './Carrinho.module.css'
import Img from '../../assets/produto.png'
import { FaTrashAlt } from "react-icons/fa";
import api from "../../services/api";
import { useEffect, useState } from "react";
import Qr from '../../assets/qrcode.png'
import { pagameto } from "../../services/venda";

export default function Carrinho() {
  const [itens, setItens] = useState([])
  const [total, setTotal] = useState(0)
  const [modal, setModal] = useState(false)
  const [msg, setMsg] = useState('Aguardando...')

  async function pegarItens() {
    const token = localStorage.getItem('userToken')
    if (!token) {
      console.log('Token não encontrado.')
      return;
    }

    const idVenda = localStorage.getItem('vendaId')

    try {
      const response = await api.get(`/itens-venda/?id=${idVenda}`, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      setItens(response.data)
      console.log('Itens:', response.data)
    } catch (error) {
      console.log('Ocorreu um erro ao buscar itens. ', error)
    }
  }



  useEffect(() => {
    pegarItens()
  }, [])

  useEffect(() => {
    let total = 0

    for (let item of itens) {
      total += parseFloat(item.produto_preco)
    }

    setTotal(total)
  }, [itens])

  return (
    <div className={styles.container}>
      <TopBar />

      <main className={styles.containerCar}>
        <div>
          <h1>Seu carrinho</h1>
        </div>
        <section className={styles.areaItens}>
          {itens.map((item) =>
            <div className={styles.item} key={item.id}>
              <img src={Img} alt="" />
              <div>
                <h2>{item.produto_nome}</h2>
                <h3>R$ {item ? parseFloat(item.produto_preco).toFixed(2).replace('.', ',') : '00,00'}</h3>
              </div>
              <div>
                <p>x{item.quantidade}</p>
              </div>

              <button>
                <FaTrashAlt />
              </button>
            </div>
          )}

        </section>
        <div className={styles.areaBtn}>
          <button onClick={() => pagameto(setModal, setMsg)}>
            Comprar
          </button>

          <h1>Total: R$ {total.toFixed(2).replace('.', ',')}</h1>
        </div>
      </main>

      <div id="modal" style={modal ? { display: 'flex' } : { display: 'none' }} className={styles.modalContainer}>
        <section>
          <h1>Efetue o pagemento via PIX</h1>
          <img src={Qr} alt="" />
          <h1>{msg}</h1>
        </section>
      </div>

    </div>
  )
}