import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import PageCadastro from "./pages/Cadastro";
import PageLogin from "./pages/Login";
import Perfil from "./pages/Perfil";
import Home from "./pages/Home";

export default function Rotas(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/login" element={<PageLogin/>}/>
        <Route path="/register" element={<PageCadastro/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/inicio" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}
