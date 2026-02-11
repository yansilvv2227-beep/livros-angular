import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LivroLista from "./LivroLista.jsx";
import LivroDados from "./LivroDados.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Catálogo de Livros
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Catálogo
            </Link>
            <Link className="nav-link" to="/dados">
              Novo
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
