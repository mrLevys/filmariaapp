import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

function Filme() {
  const { id } = useParams();
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
        // console.log(response.data);
      })
      .catch(() => {
        console.log("Filme nao encontrado!!")
      })
    } 
    loadFilme();


    return () => {
      console.log("componente foi desmontado")
    }
  },[])

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
    </div>
  )
}

export default Filme;