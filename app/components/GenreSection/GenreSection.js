import React from 'react';
import MovieCarousel from '../Carrossel/Movies/CarrosselMovie';
import styles from './GenreSection.module.css';

const GenreSection = ({ genre, movies }) => (
  <div className={styles.section}>
    <h2 className={styles.title}>{genre.name}</h2>
    <MovieCarousel movies={movies.map(movie => ({ ...movie, primaryGenre: genre }))} />
  </div>
);

export default GenreSection;