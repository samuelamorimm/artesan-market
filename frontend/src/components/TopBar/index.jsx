import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import styles from './Top.module.css'

export default function TopBar(){
  return(
    <header className={styles.container}>
      <div className={styles.areaLogo}>

      </div>

      <div className={styles.areaBusca}>
        <CiSearch className={styles.iconBusca}/>
        <input type="search" name="busca" id="busca" placeholder="Buscar..."/>
      </div>

      <div className={styles.areaBtns}>
        <button>
          <FaShoppingCart className={styles.iconBar}/>
        </button>
        <button>
          <FaUser className={styles.iconBar}/>
        </button>
      </div>

    </header>
  )
}