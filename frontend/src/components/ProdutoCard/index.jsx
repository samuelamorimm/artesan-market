import styles from './ProdutoCard.module.css'
import ImgProduto from '../../assets/produto.png'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Produto({ id, nome, imagem, preco }) {
    return (
        <Link to={`/produto/${id}`}>
            <div className={styles.produtoCard}>
                <img src={imagem} alt="produto" />

                <div className={styles.areaPreco}>
                    <h2>R$ {preco.toFixed(2).replace('.', ',')}</h2>

                    <button>
                        <FaShoppingCart />
                    </button>
                </div>

                <div className={styles.areaInfo}>
                    <h2>{nome}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.s</p>
                </div>
            </div>
        </Link>
    )
}