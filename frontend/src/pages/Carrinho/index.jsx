
import TopBar from "../../components/TopBar";
import styles from './Carrinho.module.css'
import Img from '../../assets/produto.png'
import { FaTrashAlt } from "react-icons/fa";

export default function Carrinho() {
  return (
    <div className={styles.container}>
      <TopBar />
      
      <main className={styles.containerCar}>
        <div>
          <h1>Seu carrinho</h1>
        </div>
        <section className={styles.areaItens}>
          <div className={styles.item}>
            <img src={Img} alt="" />
            <div>
              <h2>Produto</h2>
              <h3>R$ 25,00</h3>
            </div>
            <div>
              <p>x5</p>
            </div>

            <button>
              <FaTrashAlt/>
            </button>
          </div>
        </section>
        <div className={styles.areaBtn}>
          <button>
            Comprar
          </button>

          <h1>Total: R$ 100,00</h1>
        </div>
      </main>


    </div>
  )
}