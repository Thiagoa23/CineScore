// services/movieService.js
import { fetchAPI } from './apiClient';
import Movie from '../models/Movie';

export const getAllMovies = async () => {
  const data = await fetchAPI('/movies');
  return data.map(movieData => ({
    ...new Movie(movieData),
    primaryGenre: typeof movieData.primaryGenreName === 'string' ? movieData.primaryGenreName : '', // Garante que seja uma string
    otherGenres: movieData.otherGenreNames || [],   // Garante que otherGenres seja uma lista vazia se não existir
  }));
};

export const getMovieById = async (movieId) => {
  const data = await fetchAPI(`/movies/${movieId}`);
  return {
    ...new Movie(data),
    primaryGenre: typeof data.primaryGenreName === 'string' ? data.primaryGenreName : '', // Garante que seja uma string
    otherGenres: data.otherGenreNames || [],   // Garante que otherGenres seja uma lista vazia se não existir
  };
};

export const getTop10Movies = async () => {
  const data = await fetchAPI('/movies/top10');
  return data.map(movieData => ({
    id: movieData.id,
    name: movieData.name,
    imageUrl: movieData.imageUrl, // Corrige para imageUrl
    rating: movieData.rating,
    primaryGenre: typeof movieData.primaryGenreName === 'string' ? movieData.primaryGenreName : 'Gênero Desconhecido'
  }));
};

export const getMoviesByGenre = async (genreId) => {
  const data = await fetchAPI(`/movies/genre/${genreId}?limit=20`);
  return data.map(movieData => ({
    id: movieData.id,
    name: movieData.name,
    imageUrl: movieData.imageUrl, // Corrige para imageUrl
    rating: movieData.rating,
    primaryGenre: typeof movieData.primaryGenreName === 'string' ? movieData.primaryGenreName : 'Gênero Desconhecido'
  }));
};

export const getLatestMovies = async () => {
  const data = await fetchAPI('/movies/latest');
  return data.map(movieData => ({
    ...new Movie(movieData),
    primaryGenre: typeof movieData.primaryGenreName === 'string' ? movieData.primaryGenreName : '', // Garante que seja uma string
    otherGenres: movieData.otherGenreNames || [],   // Garante que otherGenres seja uma lista vazia se não existir
  }));
};
