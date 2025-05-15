import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import styles from './Top.module.css'
import { verificarStatus } from "../../services/profile";
import { useNavigate, Link } from "react-router-dom";

export default function TopBar(){
  const navigate = useNavigate()

  return(
    <header className={styles.container}>
      <div className={styles.areaLogo}>

      </div>

      <div className={styles.areaBusca}>
        <CiSearch className={styles.iconBusca}/>
        <input type="search" name="busca" id="busca" placeholder="Buscar..."/>
      </div>

      <div className={styles.areaBtns}>
        <Link to='/carrinho'>
          <button >
            <FaShoppingCart className={styles.iconBar}/>
          </button>
        </Link>
        <button onClick={() => verificarStatus(navigate)}>
          <FaUser className={styles.iconBar}/>
        </button>
      </div>

    </header>
  )
}