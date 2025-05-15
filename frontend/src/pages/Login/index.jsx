import './index.css'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { loginUser } from '../../services/auth'

export default function PageLogin() {

    const inputEmail = useRef()
    const inputSenha = useRef()

    return (
        <>
            <section id='area-titulo'>
                <h1>Entrar</h1>
                <p>Bem vindo de volta! entre na sua conta!</p>
            </section>

            <form id='form-login'>
                <div className="input-area">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" ref={inputEmail} />
                </div>
                <div className="input-area">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="senha" ref={inputSenha}/>
                </div>
            </form>

            <div className="area-btns">
                <button className="btn" onClick={() => loginUser(inputEmail.current.value, inputSenha.current.value)}>Entrar</button>
                <p>Não tem uma conta?</p>
                <Link to='/register'>
                    <button className="btn">Cadastrar</button>
                </Link>
            </div>
        </>
    )
}