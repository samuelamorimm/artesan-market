import TopBar from "../../components/TopBar"
import styles from './Painel.module.css';
import { IoAddCircleOutline } from "react-icons/io5";
import Produto from "../../components/ProdutoCard";

export default function Painel() {
    return (
        <div className={styles.container}>
            <TopBar />

            <aside className={styles.areaTopo}>
                <section className={styles.areaInfo}>
                    <div>
                        <h1>Painel Administrativo</h1>
                    </div>
                    <div className={styles.areaPerfil}>
                    </div>
                    <div>
                        <h2>Nome vendedor</h2>
                    </div>
                </section>

                <section className={styles.areaHistorico}>
                    <div>
                        <h1>Histórico de vendas</h1>
                    </div>

                    <div className={styles.areaVendaScroll}>
                        <div className={styles.areaVenda}>
                            <div>
                                <h2>#1</h2>
                            </div>
                            <div>
                                <h2>Nome venda</h2>
                            </div>
                            <div>
                                <h2>R$ 25,00</h2>
                            </div>
                        </div>
                        <div className={styles.areaVenda}>
                            <div>
                                <h2>#1</h2>
                            </div>
                            <div>
                                <h2>Nome venda</h2>
                            </div>
                            <div>
                                <h2>R$ 25,00</h2>
                            </div>
                        </div>
                        <div className={styles.areaVenda}>
                            <div>
                                <h2>#1</h2>
                            </div>
                            <div>
                                <h2>Nome venda</h2>
                            </div>
                            <div>
                                <h2>R$ 25,00</h2>
                            </div>
                        </div>
                        <div className={styles.areaVenda}>
                            <div>
                                <h2>#1</h2>
                            </div>
                            <div>
                                <h2>Nome venda</h2>
                            </div>
                            <div>
                                <h2>R$ 25,00</h2>
                            </div>
                        </div>
                        <div className={styles.areaVenda}>
                            <div>
                                <h2>#1</h2>
                            </div>
                            <div>
                                <h2>Nome venda</h2>
                            </div>
                            <div>
                                <h2>R$ 25,00</h2>
                            </div>
                        </div>
                        <div className={styles.areaVenda}>
                            <div>
                                <h2>#1</h2>
                            </div>
                            <div>
                                <h2>Nome venda</h2>
                            </div>
                            <div>
                                <h2>R$ 25,00</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </aside>

            <aside className={styles.areaProdutos}>
                <div className={styles.areaTitulo}>
                    <h1>Seus produtos</h1>
                    <button>
                        <IoAddCircleOutline />
                    </button >
                </div>

                <div className={styles.containerProdutos}>
                    <Produto />
                    <Produto />

                    <Produto />
                    <Produto />
                    <Produto />


                </div>
            </aside>

            
        </div>
    )
}