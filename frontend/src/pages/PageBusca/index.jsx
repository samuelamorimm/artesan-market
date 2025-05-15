
import TopBar from "../../components/TopBar";
import styles from './Busca.module.css'
import Produto from "../../components/ProdutoCard";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useState, useEffect, useRef } from "react";
import { pegarProdutos } from "../../services/products";
import { useParams } from "react-router-dom";


export default function Busca() {
  const [produtos, setProdutos] = useState([])
  const { result } = useParams()

  async function buscarProduto() {
    const token = localStorage.getItem('userToken')
    if (!token) {
      console.log('Token não encontrado.')
      return;
    }

    try {
      const response = await api.get(`/busca/?name=${result}`, {
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

  useEffect(() => {
    buscarProduto()
  }, [result])


  return (
    <div className={styles.container}>
      <TopBar />


      <main className={styles.main}>
        <h1>Resultados para "{result}":  {produtos.length}</h1>

        <section className={styles.areaProdutos}>

          {produtos.map((item) =>
            <Produto key={item.id} id={item.id} nome={item.nome} imagem={item.imagem} preco={item.preco} />
          )}

        </section>
      </main>
    </div>
  )
}