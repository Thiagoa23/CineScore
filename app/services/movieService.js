import Movie from '../models/Movie';

const baseURL = 'http://localhost:8080';

export const getAllMovies = async () => {
  try {
    const response = await fetch(`${baseURL}/movies`);
    if (!response.ok) {
      throw new Error('Erro ao buscar filmes');
    }
    const data = await response.json();
    return data.map(movieData => new Movie(movieData));
  } catch (error) {
    console.error('Erro ao buscar todos os filmes:', error);
    throw error;
  }
};

export const getTop10Movies = async () => {
  try {
    const response = await fetch(`${baseURL}/movies/top10`);
    if (!response.ok) {
      throw new Error('Erro ao buscar top 10 filmes');
    }
    const data = await response.json();
    return data.map(movieData => new Movie(movieData));
  } catch (error) {
    console.error('Erro ao buscar top 10 filmes:', error);
    throw error;
  }
};


export const getMoviesByGenre = async (genreId) => {
  const response = await fetch(`${baseURL}/movies/genre/${genreId}?limit=20`);
  if (!response.ok) {
    throw new Error('Erro ao buscar filmes por gênero');
  }
  return response.json();
};

export const getLatestMovies = async () => {
  const response = await fetch(`${baseURL}/movies/latest`);
  if (!response.ok) throw new Error("Erro ao buscar filmes mais recentes");
  return response.json();
};
