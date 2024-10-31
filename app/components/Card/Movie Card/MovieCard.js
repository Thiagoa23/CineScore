import styles from './MovieCard.module.css';

const MovieCard = ({ movie, isTop10 }) => {
  return (
    <div className={`${styles.movieCard} ${isTop10 ? styles.top10Card : ''}`}>
      <div className={`${styles.imageContainer} ${isTop10 ? styles.top10Image : ''}`} style={{ backgroundImage: `url(${movie.image})` }}>
      </div>
      <div className={styles.info}>
        <h3>{movie.name}</h3>
        <div className={styles.details}>
          <span>★ {movie.rating}</span>
          <span className={styles.separator}> |</span>
          <span className={styles.genre}>{movie.genre}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
