import TopBar from "../../components/TopBar"
import styles from './Detalhes.module.css'
import ImgProduto from '../../assets/produto.png'

export default function Detalhes() {
    return (
        <div className={styles.container}>
            <TopBar />

            <section className={styles.areaInfo}>
                <div className={styles.areaImg}>
                    <img src={ImgProduto} alt="produto" />
                </div>

                <div className={styles.areaSobre}>
                    <div>
                        <h1>Nome produto</h1>
                        <h1>R$ 25,00</h1>
                    </div>
                    <div className={styles.areaBtn}>
                        <button>
                            Adicionar
                        </button>

                        <input
                            type="number"
                            name="quantidade"
                        />
                    </div>
                </div>

                <div>
                    <div></div>

                </div>
            </section>

            <section className={styles.areaDesc}>
                <h1>Decrição do produto</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam fuga praesentium delectus quidem possimus eaque, debitis dolores odio impedit laborum. At quod nesciunt natus error voluptatem excepturi qui atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, odio dignissimos! Perspiciatis ad adipisci iste eveniet suscipit reprehenderit eligendi minus maxime in tenetur, dolorem accusamus omnis optio dolore voluptas quos!
                </p>
            </section>
        </div>
    )
}