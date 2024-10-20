import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./favoritos.css";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@filmariaapp");
    setFilmes(JSON.parse(minhaLista) || []);
  }, [])

  function exluirFilme(id) {
    let filtroFilmes = filmes.filter((filme) => {
      return (filme.id !== id);
    })

    setFilmes(filtroFilmes);
    localStorage.setItem("@filmariaapp", JSON.stringify(filtroFilmes));
  }

  return(
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>

      {filmes.length === 0 && <span>Você não possui nenhum filme salvo :/</span>}
      <ul>
        {filmes.map((filme) => {
          return (
            <li key={filme.id}>
              <span>{filme.title}</span>
              <div className="controls">
                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                <button onClick={() => exluirFilme(filme.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos;