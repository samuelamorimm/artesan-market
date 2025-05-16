import styles from './Inicio.module.css'

import Inicial from '../../assets/inicial.png'
import { Link } from 'react-router-dom'

export default function Inicio() {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <div className={styles.logoArea}>

                </div>

                <div className={styles.linkArea}>
                    <a href="" className={styles.link}>Início</a>
                    <a href="" className={styles.link}>Sobre</a>
                    <a href="" className={styles.link}>Contato</a>
                    <a href="" className={styles.link}>Duvidas</a>
                </div>


                <div className={styles.btnArea}>
                    <Link to='/login'>
                        <button className={styles.btnLogin}>Entrar</button>
                    </Link>
                    <Link to='/register'>
                        <button className={styles.btnLogin}>Cadastrar</button>
                    </Link>
                </div>
            </nav>

            <main className={styles.main}>
                <section className={styles.sectionImg}>
                    <img src={Inicial} className={styles.img} alt="Homem fabricando jarro" />
                </section>
                <section className={styles.sectionTxt}>
                    <h1 className={styles.titulo}>Artisan Market</h1>
                    <p className={styles.sobre}>Oferecemos ao usuário a melhor experiência de compra e venda. E um marketplace totalmente focado no artesanato, tanto para você vendedor quanto ao consumidor. Experimente!
                    </p>

                    <Link to='/register'>
                        <button className={styles.btnStart}>Começar</button>
                    </Link>
                </section>
            </main>
        </div>
    )
}