import './index.css'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Perfil() {
  return (
    <>

      <section id='area-titulo'>
        <h1>Perfil</h1>
        <p>Estamos quase lá! Precisamos que insira alguns dados para seu perfil.</p>
      </section>

      <form id='form-login'>
        <div className="input-area">
          <label htmlFor="email">Nome</label>
          <input type="text" name="nome" id="nome" />
        </div>
        <div className="input-area">
          <label htmlFor="cpf">CPF (apenas números)</label>
          <input type="number" name="cpf" id="cpf" max={11} />
        </div>
        <div className="input-area">
          <label htmlFor="data">Data de nascimento</label>
          <input type="date" name="data" id="data" />
        </div>
      </form>

      <div className="area-btns">
        <Link to='/home'>
          <button className="btn">Avançar</button>
        </Link>
      </div>
    </>
  )
}