import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from "./components/layout/Navbar/Navbar";
import AddProduto from "./pages/AddProduto/AddProduto";

import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos/Produtos";

const Rotas = () => {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/produtos" element={<Produtos/>} />
            <Route exact path="/produtos/add" element={<AddProduto/>} />
            <Route path="*" element={<h1>Erro, Página não encontrada!</h1>} /> {/* Criar uma página de erro depois! */}
        </Routes>
        
        </BrowserRouter>
    )
}

export default Rotas
