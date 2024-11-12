// hooks/useGenresWithMovies.js
import { useState, useEffect } from 'react';
import { getAllGenres } from '../services/GenreService';
import { getMoviesByGenre } from '../services/movieService';

const useGenresWithMovies = () => {
  const [genresWithMovies, setGenresWithMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenresWithMovies = async () => {
      try {
        const genres = await getAllGenres();
        const genresWithMoviesData = await Promise.all(
          genres.map(async (genre) => {
            const movies = await getMoviesByGenre(genre.id);
            return { genre, movies };
          })
        );
        setGenresWithMovies(genresWithMoviesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGenresWithMovies();
  }, []);

  return { genresWithMovies, loading, error };
};

export default useGenresWithMovies;
