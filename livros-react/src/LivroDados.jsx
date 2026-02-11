import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import { Livro } from "./model/Livro";

const controleLivros = new ControleLivros();
const controleEditora = new ControleEditora();

function LivroDados() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(1);

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();

    const autoresArray = autores.split("\n");
    const livro = new Livro("", codEditora, titulo, resumo, autoresArray);

    controleLivros.incluir(livro).then(() => {
      navigate("/");
    });
  };

  return (
    <main className="container">
      <h1 className="my-4">Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">
            Resumo
          </label>
          <textarea
            className="form-control"
            id="resumo"
            rows="3"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="editora" className="form-label">
            Editora
          </label>
          <select
            className="form-select"
            id="editora"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="autores" className="form-label">
            Autores (um por linha)
          </label>
          <textarea
            className="form-control"
            id="autores"
            rows="3"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Salvar Dados
        </button>
      </form>
    </main>
  );
}

export default LivroDados;
