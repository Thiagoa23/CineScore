// MovieCarousel.js
import React, { useRef, useState } from "react";
import styles from './CarrosselMovie.module.css';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../../Card/Movie Card/MovieCard';

register();
import 'swiper/css';

const MovieCarousel = ({ movies }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        {!isBeginning && (
          <button
            className={styles.customPrevButton}
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            {"<"}
          </button>
        )}
        <Swiper
          ref={swiperRef}
          slidesPerView={6.5}
          slidesPerGroup={5}
          loop={true}
          speed={1000}
          onSlideChange={handleSlideChange}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <MovieCard
                title={movie.title}
                genre={movie.genre}
                rating={movie.rating}
                imageUrl={movie.imageUrl}
                isTop10={false} // ou true, dependendo do contexto
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {!isEnd && (
          <button
            className={styles.customNextButton}
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCarousel;
