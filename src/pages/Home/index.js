import { useEffect, useState } from "react";
import api from '../../services/api'

// URL DA API:  /movie/now_playing?api_key=323f35eb72dc6ddeda3c36020406b9fc




function Home() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", { 
        params:{
          api_key: "323f35eb72dc6ddeda3c36020406b9fc",
          language: "pt-BR",
          page: 1,
        }
      })

      // console.log(response.data.results);

    }
    loadFilmes();

  },[])

  return (
    <>
      <h1>Bem vindo a home</h1>
    </>
  )
}

export default Home;