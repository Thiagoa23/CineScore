import React from 'react';
import MovieCard from './MovieCard'; // 
import styles from './GenreSection.module.css'; 

const GenreSection = ({ genre, movies }) => {
  return (
    <div className={styles.genreSection}>
      <h3 className={styles.genreTitle}>{genre}</h3>
      <div className={styles.moviesGrid}>
        {movies.map((movie, idx) => (
          <MovieCard key={idx} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default GenreSection;
