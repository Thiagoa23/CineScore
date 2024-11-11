import Movie from '../models/Movie';

const baseURL = 'http://localhost:8080';  // URL base da API

export const getAllMovies = async () => {
  try {
    const response = await fetch(`${baseURL}/movies`);
    if (!response.ok) {
      throw new Error('Erro ao buscar filmes');
    }
    const data = await response.json();

    // Transforma cada item em uma instância de Movie
    return data.map(movieData => {
      // Separando o gênero principal dos gêneros associados
      const primaryGenre = movieData.genres.find(genre => genre.primaryGenre === true)?.name;
      const otherGenres = movieData.genres.filter(genre => genre.primaryGenre === false).map(genre => genre.name);

      return new Movie(
        movieData.id,
        movieData.title,
        primaryGenre,                // Gênero principal
        otherGenres,                 // Lista de outros gêneros
        movieData.rating,
        movieData.synopsis,
        movieData.imageUrl,
        movieData.releaseDate,
        movieData.director,
        movieData.actors
      );
    });
  } catch (error) {
    console.error('Erro ao buscar todos os filmes:', error);
    throw error;
  }
};
