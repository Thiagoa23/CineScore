import React from 'react';
import styles from './MovieCardTop10.module.css'; 
import MovieCard from '../../Card/Movie Card/MovieCard';

const Top10MovieCard = ({ movie, rank }) => {
  return (
    <div className={styles.movieWrapper}>
      <span className={styles.rank}>{rank}</span>
      <MovieCard className={styles.Card} movie={movie} isTop10={true} />
    </div>
  );
};

export default Top10MovieCard;
