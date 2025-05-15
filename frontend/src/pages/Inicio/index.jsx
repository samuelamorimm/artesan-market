import './index.css'
import Inicial from '../../assets/inicial.png'
import { Link } from 'react-router-dom'

export default function Inicio() {
    return (
        <>
            <nav>
                <div id='logo-area'>

                </div>

                <div id='link-area'>
                    <a href="" className="link">Início</a>
                    <a href="" className="link">Sobre</a>
                    <a href="" className="link">Contato</a>
                    <a href="" className="link">Duvidas</a>
                </div>


                <div id='btn-area'>
                    <Link to='/login'>
                        <button className="btn-login">Entrar</button>
                    </Link>
                    <Link to='/register'>
                        <button className="btn-login">Cadastrar</button>
                    </Link>
                </div>
            </nav>

            <main>
                <section id='section-img'>
                    <img src={Inicial} alt="Homem fabricando jarro" />
                </section>
                <section id='section-txt'>
                    <h1 id='titulo'>Artisan Market</h1>
                    <p id='sobre'>Oferecemos ao usuário a melhor experiência de compra e venda. E um marketplace totalmente focado no artesanato, tanto para você vendedor quanto ao consumidor. Experimente!
                    </p>

                    <button id='btn-start'>Começar</button>
                </section>
            </main>
        </>
    )
}