import React from 'react';
import MovieCarousel from '../Carrossel/Movies/CarrosselMovie';
import styles from './GenreSection.module.css';

const GenreSection = ({ genreName, movies }) => (
  <div className={styles.section}>
    <h2 className={styles.title}>{genreName}</h2>
    <MovieCarousel movies={movies} />
  </div>
);

export default GenreSection;