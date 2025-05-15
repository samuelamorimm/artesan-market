import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function TopBar(){
  return(
    <header>
      <div id="area-logo">

      </div>

      <div className="area-busca">
        <CiSearch className="icon-busca"/>
        <input type="search" name="busca" id="busca" placeholder="Buscar..."/>
      </div>

      <div id="area-btns">
        <button>
          <FaShoppingCart/>
        </button>
        <button>
          <FaUser/>
        </button>
      </div>

    </header>
  )
}