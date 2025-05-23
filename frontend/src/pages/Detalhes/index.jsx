import TopBar from "../../components/TopBar"
import styles from './Detalhes.module.css'
import ImgProduto from '../../assets/produto.png'
import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import api from "../../services/api";
import { criarVenda } from "../../services/venda";

export default function Detalhes() {
    const { id } = useParams()
    const [produto, setProduto] = useState([])
    const [idVendedor, setIdVendedor] = useState(null)

    const quantidade = useRef()

    async function buscarProduto() {

        const token = localStorage.getItem('userToken')
        if (!token) {
            console.log('Token não encontrado.')
            return;
        }

        try {
            const response = await api.get(`/produtos-geral/${id}/`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });
            setProduto(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Erro ao buscar produto', error);
        }
    }

    async function buscarVendedor() {

        const token = localStorage.getItem('userToken')
        if (!token) {
            console.log('Token não encontrado.')
            return;
        }

        try {
            const response = await api.get(`/buscar-vendedor/?nome=${produto?.nome}`, {
                headers: {
                    Authorization: `Token ${token}`
                }
            });
            console.log('id:', response.data.id)
            setIdVendedor(response.data.id)
        } catch (error) {
            console.error('Erro ao buscar vendedor', error);
        }
    }



    useEffect(() => {
        buscarProduto()
    }, [])

    useEffect(() => {
        if (produto?.nome) {
            buscarVendedor()
        }
    }, [produto])


    return (
        <div className={styles.container}>
            <TopBar />

            <section className={styles.areaInfo}>
                <div className={styles.areaImg}>
                    <img src={produto?.imagem} alt="produto" />
                </div>

                <div className={styles.areaSobre}>
                    <div>
                        <h1>{produto?.nome}</h1>
                        <h1>R$ {produto.preco ? produto.preco.toFixed(2).replace('.', ',') : '00,00'}</h1>
                    </div>
                    <div className={styles.areaBtn}>
                        <button onClick={() => criarVenda(idVendedor, quantidade.current?.value, produto.id)}>
                            Adicionar
                        </button>

                        <input
                            type="number"
                            name="quantidade"
                            ref={quantidade}
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