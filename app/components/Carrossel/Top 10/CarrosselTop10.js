import React from "react";
import styles from './CarrosselTop10.module.css';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import Top10MovieCard from '../../Card/Card Top 10/MovieCardTop10';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Top10Carousel = ({ movies }) => {
  const extendedMovies = [...movies,...movies, ...movies];
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        slidesPerView={3.5} // Número de slides visíveis
        slidesPerGroup={3} 
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000, // Tempo entre as trocas automáticas
          disableOnInteraction: false,
        }}
        navigation={true} // Navegação com setas
      >
         {extendedMovies.map((movie, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Top10MovieCard movie={movie} rank={(index % movies.length) + 1} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Top10Carousel;