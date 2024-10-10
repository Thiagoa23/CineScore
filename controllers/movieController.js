import { getGenres, getMoviesByGenre } from '../app/models/movieModel'; 

export const getGenresAndMovies = async () => {
  try {
    const genresData = await getGenres(); 
    const moviesData = {};

    for (const genre of genresData) {
      // O token será passado apenas se existir
      const movies = await getMoviesByGenre(genre); 
      moviesData[genre] = movies;
    }

    return { genresData, moviesData };
  } catch (error) {
    throw new Error('Erro ao buscar gêneros e filmes');
  }
};