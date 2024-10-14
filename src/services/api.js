import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=323f35eb72dc6ddeda3c36020406b9fc

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;


