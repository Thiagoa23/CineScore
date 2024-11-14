// MovieCard.js
import styles from './MovieCard.module.css';

const MovieCard = ({ title, genre, rating, imageUrl, isTop10 }) => {
  return (
    <div className={`${styles.movieCard} ${isTop10 ? styles.top10Card : ''}`}>
      <div
        className={`${styles.imageContainer} ${isTop10 ? styles.top10Image : ''}`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <div className={styles.details}>
          <span>★ {rating}</span>
          <span className={styles.separator}> | </span>
          <span className={styles.genre}>{genre || 'Gênero Desconhecido'}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
