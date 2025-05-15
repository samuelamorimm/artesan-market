import { Link } from "react-router-dom"
import { useRef, useState } from "react";
import './index.css'
import { RegisterUser } from "../../services/auth";

export default function PageCadastro() {

    const inputEmail = useRef()
    const inputSenha = useRef()
    const inputConfirmar = useRef()

    return (
        <>
            <section id='area-titulo'>
                <h1>Cadastro</h1>
                <p>Seja bem vindo! Insira suas informações abaixo.</p>
            </section>

            

            <form id='form-login'>
                <div className="input-area">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" ref={inputEmail}/>
                </div>
                <div className="input-area">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="senha" ref={inputSenha}/>
                </div>
                <div className="input-area">
                    <label htmlFor="senha">Confirmar senha</label>
                    <input type="password" name="senha" id="senha" ref={inputConfirmar}/>
                </div>
            </form>

            <div className="area-btns">
                <button className="btn"
                    onClick={() => RegisterUser(inputEmail.current?.value, inputSenha.current?.value, inputConfirmar.current?.value)}
                >
                    Cadastrar
                </button>
                <p>Já possui uma conta?</p>
                <Link to='/login'>
                    <button className="btn">Entrar</button>
                </Link>
            </div>
        </>
    )
}