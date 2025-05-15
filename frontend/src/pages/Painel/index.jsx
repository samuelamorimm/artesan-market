import TopBar from "../../components/TopBar"
import styles from './Painel.module.css';
import { IoAddCircleOutline } from "react-icons/io5";
import Produto from "../../components/ProdutoCard";
import { pegarPerfil } from "../../services/profile";
import api from "../../services/api";
import { criarProduto } from "../../services/products";

import { useState, useEffect, useRef } from "react";


export default function Painel() {
    const [perfil, setPerfil] = useState([])
    const [modal, setModal] = useState(false)
    const [categorias, setCategorias] = useState([])
    const [produtos, setProdutos] = useState([])

    const inputNome = useRef()
    const imgProduto = useRef()
    const precoProduto = useRef()
    const categoriaProduto = useRef()

    async function pegarCategorias() {
        try {
            const response = await api.get('/categorias')
            console.log(response.data)
            setCategorias(response.data)
        } catch (error) {
            console.log('Erro ao buscar categorias.', error)
        }
    }

    async function produtosUser() {
        const token = localStorage.getItem('userToken')
        if (!token) {
            console.log('Token não encontrado.')
            return;
        }

        try {
            const response = await api.get('/produtos', {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            setProdutos(response.data)
            console.log('Produtos:', response.data)
        } catch (error) {
            alert('Ocorreu um erro ao buscar seus produtos.')
        }
    }

    useEffect(() => {
        pegarPerfil(setPerfil)
        pegarCategorias()
        produtosUser()
    }, [])




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
                        <h2>{perfil[0]?.nome}</h2>
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
                    </div>
                </section>
            </aside>

            <aside className={styles.areaProdutos}>
                <div className={styles.areaTitulo}>
                    <h1>Seus produtos</h1>
                    <button onClick={() => setModal(!modal)}>
                        <IoAddCircleOutline />
                    </button >
                </div>

                <div className={styles.containerProdutos}>
                    
                    {produtos.map((item) =>
                        <Produto key={item.id} nome={item.nome} imagem={item.imagem} preco={item.preco}/>
                    )}


                </div>
            </aside>

            <div id="modal" style={modal ? { display: 'flex' } : { display: 'none' }} className={styles.modalContainer}>
                <section>
                    <h1>Adicione um produto</h1>

                    <div className="input-area">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" id="nome" ref={inputNome} />
                    </div>

                    <div className="input-area">
                        <label htmlFor="imagem">Imagem</label>
                        <input type="file" name="imagem" id="imagem" ref={imgProduto} />
                    </div>

                    <div className="input-area">
                        <label htmlFor="preco">Preço</label>
                        <input type="number" name="preco" id="preco" ref={precoProduto} />
                    </div>

                    <div className="input-area">
                        <label htmlFor="categoria">Categoria</label>
                        <select name="categoria" id="categoria" ref={categoriaProduto}>
                            {categorias.map((item, index) =>
                                <option key={index} value={item.id}>{item.nome}</option>
                            )}
                        </select>
                    </div>

                    <div className="input-area">
                        <label htmlFor="desc">Descrição</label>
                        <input type="text" name="desc" id="desc" />
                    </div>

                    <div className={styles.areaBtnModal}>
                        <button
                            className="btn btn-success"
                            onClick={() => criarProduto(inputNome.current?.value, imgProduto.current?.files[0], precoProduto.current?.value, categoriaProduto.current?.value)}
                        >
                            Adicionar
                        </button>

                        <button className="btn btn-danger" onClick={() => setModal(!modal)}>
                            Cancelar
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}