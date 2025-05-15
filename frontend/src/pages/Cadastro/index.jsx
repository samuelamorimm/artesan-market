import { Link } from "react-router-dom"
import './index.css'

export default function PageCadastro() {
    return (
        <>
            <section id='area-titulo'>
                <h1>Cadastro</h1>
                <p>Seja bem vindo! Insira suas informações abaixo.</p>
            </section>

            <div className="container-classes">
                <label>Eu sou?</label>
                <div id="area-classes">
                    <button className="btn-classe">Vendedor</button>
                    <button className="btn-classe btn-sel">Consumidor</button>
                </div>
            </div>

            <form id='form-login'>
                <div className="input-area">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="input-area">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="senha" />
                </div>
                <div className="input-area">
                    <label htmlFor="senha">Confirmar senha</label>
                    <input type="password" name="senha" id="senha" />
                </div>
            </form>

            <div className="area-btns">
                <Link to='/perfil'>
                <button className="btn">Cadastrar</button>
                </Link>
                <p>Já possui uma conta?</p>
                <Link to='/login'>
                    <button className="btn">Entrar</button>
                </Link>
            </div>
        </>
    )
}