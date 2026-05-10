import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

export async function getLivros(query = "", preco = "") {
  const response = await axios.get(`${API_URL}/livros`, {
    params: {
      q: query,
      preco_max: preco
    }
  });

  return response.data;
}

export async function getLivroById(id: number) {
  const response = await axios.get(`${API_URL}/livros/${id}`);
  return response.data;
}