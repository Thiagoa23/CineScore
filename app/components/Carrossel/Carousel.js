import { useState, useEffect } from 'react';
import styles from './carousel.module.css';

const CarouselComponent = () => {
  // Dados estáticos simulando o retorno da API
  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      poster: 'https://via.placeholder.com/1590x390?text=Movie+1',
      rating: 120
    },
    {
      id: 2,
      title: 'Movie 2',
      poster: 'https://via.placeholder.com/1590x390?text=Movie+2',
      rating: 98
    },
    {
      id: 3,
      title: 'Movie 3',
      poster: 'https://via.placeholder.com/1590x390?text=Movie+3',
      rating: 110
    },
    {
      id: 4,
      title: 'Movie 4',
      poster: 'https://via.placeholder.com/1590x390?text=Movie+4',
      rating: 95
    },
    {
      id: 5,
      title: 'Movie 5',
      poster: 'https://via.placeholder.com/1590x390?text=Movie+5',
      rating: 89
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para ir para o próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para ir para o slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  // Autoplay: Troca automática de slides a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
    
    <button onClick={prevSlide} className={styles.prevButton}>Anterior</button>
    <div className={styles.carouselContent}>
    {movies.map((movie, index) => (
        <div
            key={movie.id}
            className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
            style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                transition: 'transform 0.5s ease-in-out',
            }}
        >
        <img src={movie.poster} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.rating} avaliações</p>
        </div>
    ))}
    </div>
    <button onClick={nextSlide} className={styles.nextButton}>Próximo</button>
    
      </div>
    </div>
  );
};

export default CarouselComponent;
