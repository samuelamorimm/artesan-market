import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import PageCadastro from "./pages/Cadastro";
import PageLogin from "./pages/Login";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";
import Painel from "./pages/Painel";
import Carrinho from "./pages/Carrinho";

export default function Rotas(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/login" element={<PageLogin/>}/>
        <Route path="/register" element={<PageCadastro/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/inicio" element={<Home/>}/>
        <Route path="/produto/:id" element={<Detalhes/>}/>
        <Route path="/painel" element={<Painel/>}/>
        <Route path="/carrinho" element={<Carrinho/>}/>
      </Routes>
    </BrowserRouter>
  )
}
