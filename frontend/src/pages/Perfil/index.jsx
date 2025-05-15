import './index.css'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRef, useState } from 'react';
import { registerProfile } from '../../services/auth';

export default function Perfil() {

  const btn = document.querySelectorAll('.btn-classe')
  

  function setarClasse(classe) {
    setClasse(classe)
  }

  const [classe, setClasse] = useState('')

  const inputNome = useRef()
  const inputCpf = useRef()
  const inputCidade = useRef()
  const inputDataNasc = useRef()

  return (
    <>

      <section id='area-titulo'>
        <h1>Perfil</h1>
        <p>Estamos quase lá! Precisamos que insira alguns dados para seu perfil.</p>
      </section>

      <div className="container-classes">
        <label>Eu sou?</label>
        <div id="area-classes">
          <button className="btn-classe" onClick={() => setarClasse('V')}>Vendedor</button>
          <button className="btn-classe" onClick={() => setarClasse('C')}>Consumidor</button>
        </div>
      </div>

      <form id='form-login'>
        <div className="input-area">
          <label htmlFor="email">Nome</label>
          <input type="text" name="nome" id="nome" ref={inputNome}/>
        </div>
        <div className="input-area">
          <label htmlFor="cpf">CPF (apenas números)</label>
          <input type="number" name="cpf" id="cpf" ref={inputCpf}/>
        </div>
        <div className="input-area">
          <label htmlFor="cidade">Cidade</label>
          <input type="text" name="cidade" id="cidade" ref={inputCidade} />
        </div>
        <div className="input-area">
          <label htmlFor="data">Data de nascimento</label>
          <input type="date" name="data" id="data" ref={inputDataNasc}/>
        </div>
      </form>

      <div className="area-btns">
        
          <button className="btn"
           onClick={() => registerProfile(inputNome.current?.value, inputCpf.current?.value, inputCidade.current?.value, inputDataNasc.current?.value, classe)}
          >Avançar</button>
      
      </div>
    </>
  )
}