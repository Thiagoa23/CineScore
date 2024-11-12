// views/home/Home.js
"use client";

import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Input from "../../components/Input/Input";
import BannerCarousel from '../../components/Carrossel/Banner/CarrosselBanner';
import Top10Carousel from '../../components/Carrossel/Top 10/CarrosselTop10';
import GenreSection from '../../components/GenreSection/GenreSection';
import useGenresWithMovies from '../../hooks/useGenresWithMovies';
import useLatestMovies from '../../hooks/useLatestMovies';
import useTop10Movies from '../../hooks/useTop10Movies';
import styles from './Home.module.css';

const Home = () => {
  const { genresWithMovies, loading, error } = useGenresWithMovies();
  const { latestMovies, error: latestMoviesError } = useLatestMovies();
  const { top10Movies, error: top10MoviesError } = useTop10Movies();

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.section1}>
          <Input />
        </div>

        {/* Carrossel de Destaque */}
        <div className={styles.section2}>
          <BannerCarousel banners={latestMovies} />
          {latestMoviesError && <div>Erro ao carregar filmes em destaque: {latestMoviesError}</div>}
        </div>

        {/* Carrossel Top 10 */}
        <div className={styles.section3}>
          <h1 className={styles.title}>Top 10</h1>
          <Top10Carousel className={styles.carrossel} movies={top10Movies} />
          {top10MoviesError && <div>Erro ao carregar Top 10 filmes: {top10MoviesError}</div>}
        </div>

        {/* Seções por Gênero */}
        {loading ? (
          <div>Carregando gêneros...</div>
        ) : (
          genresWithMovies.map(({ genre, movies }) => (
            <GenreSection key={genre.id} genreName={genre.name} movies={movies} />
          ))
        )}
        {error && <div>Erro ao carregar gêneros e filmes: {error}</div>}
      </main>
    </div>
  );
};

export default Home;
