
import TopBar from "../../components/TopBar";
import styles from './Home.module.css'
import Produto from "../../components/ProdutoCard";
import { Link } from "react-router-dom";


export default function Home() {
  return(
    <div className={styles.container}>
      <TopBar/>

      <section className={styles.areaCategorias}>
        <button>
          Categoria
        </button>
        <button>
          Categoria
        </button>
        <button>
          Categoria
        </button>
      </section>

      <main className={styles.main}>
        <h1>Sugestões para você</h1>

        <section className={styles.areaProdutos}>
          
          <Produto/>
          
        </section>
      </main>
    </div>
  ) 
}