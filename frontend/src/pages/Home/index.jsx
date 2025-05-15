
import TopBar from "../../components/TopBar";
import styles from './Home.module.css'
import Produto from "../../components/ProdutoCard";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { pegarProdutos } from "../../services/products";


export default function Home() {
  const [categorias, setCategorias] = useState([])
  const [produtos, setProdutos] = useState([])

  async function pegarCategorias() {
    try {
      const response = await api.get('/categorias')
      console.log(response.data)
      setCategorias(response.data)
    } catch (error) {
      console.log('Erro ao buscar categorias.')
    }
  }

  useEffect(() => {
    pegarCategorias()
    pegarProdutos(setProdutos)
  }, [])


  return (
    <div className={styles.container}>
      <TopBar />

      <section className={styles.areaCategorias}>
        {categorias.map((item, index) =>
          <button key={index}>{item.nome}</button>
        )}
      </section>

      <main className={styles.main}>
        <h1>Sugestões para você</h1>

        <section className={styles.areaProdutos}>

          {produtos.map((item) =>
            <Produto key={item.id} id={item.id} nome={item.nome} imagem={item.imagem} preco={item.preco} />
          )}

        </section>
      </main>
    </div>
  )
}