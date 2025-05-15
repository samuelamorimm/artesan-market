import styles from './ProdutoCard.module.css'
import ImgProduto from '../../assets/produto.png'
import { FaShoppingCart } from "react-icons/fa";

export default function Produto() {
    return(
        <div className={styles.produtoCard}>
            <img src={ImgProduto} alt="produto" />

            <div className={styles.areaPreco}>
                <h2>R$ 25,00</h2>

                <button>
                    <FaShoppingCart/>
                </button>
            </div>

            <div className={styles.areaInfo}>
              <h2>Nome produto</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.s</p>
            </div>
        </div>
    )
}