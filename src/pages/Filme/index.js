import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./filme-info.css";

import api from "../../services/api";

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilme = async () => {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "323f35eb72dc6ddeda3c36020406b9fc",
          language: "pt-BR",
        }
      })
      .then((response) => {
        setFilme(response.data);
        setLoading(false)
      })
      .catch(() => {
        console.log("Filme nao encontrado!!");
        navigate("/", { replace: true });
        return;
      })
    } 
    loadFilme();


    return () => {
      console.log("componente foi desmontado")
    }
  },[id, navigate])

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando Filme</h1>
      </div>
    )
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <p>{filme.overview}</p>
      <p><strong>{filme.vote_average} /10</strong></p>
      <p className="area-buttons">
        <button>Salvar</button>
        <button>
          <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target="_blank" rel="external noreferrer">
            Trailer
          </a>
        </button>
      </p>
    </div>
  )
}

export default Filme;