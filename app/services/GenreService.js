const baseURL = 'http://localhost:8080';

export const getAllGenres = async () => {
  const response = await fetch(`${baseURL}/genres`);
  if (!response.ok) {
    throw new Error('Erro ao buscar gêneros');
  }
  return response.json();
};