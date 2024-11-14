// GenreSection.js
import React from 'react';
import MovieCarousel from '../Carrossel/Movies/CarrosselMovie';
import styles from './GenreSection.module.css';

const GenreSection = ({ genre, movies }) => {
  console.log("Movies recebidos em GenreSection:", movies); // Log para verificar os dados

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{genre.name}</h2>
      <MovieCarousel
        movies={movies.map(movie => ({
          id: movie.id,
          title: movie.name,
          genre: movie.primaryGenre, // Passa o gênero diretamente
          rating: movie.rating,
          imageUrl: movie.imageUrl,
        }))}
      />
    </div>
  );
};

export default GenreSection;
