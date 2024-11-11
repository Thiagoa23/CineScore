"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import useMovies from '../../hooks/useMovies';
import BannerCarousel from '../../components/Carrossel/Banner/CarrosselBanner';
import Top10Carousel from '../../components/Carrossel/Top 10/CarrosselTop10';
import MovieCarousel from '../../components/Carrossel/Movies/CarrosselMovie';
import Input from "../../components/Input/Input";

//Slider

const featuredMovies = [
  {
    name: 'Arca de Noé',
    synopsis: 'Nesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraNesta aventura animada e inspiradoraesta aventura animada e inspiradoraNesta aventura animada e inspiradora',
    imageUrl: 'https://midias.imagemfilmes.com.br/capas/680ac54e-014b-4ac7-ad05-db4cc955ebee_m.jpg?2024-10-08T15:57:57.182879',
    rating: 4.9,
  },
  {
    name: 'The Lion King',
    synopsis: 'Simba, um jovem leão, descobre seu lugar...',
    imageUrl: 'https://via.placeholder.com/200x300?text=Lion+King',
    rating: 4.8,
  },
  {
    name: 'Finding Nemo',
    synopsis: 'Uma emocionante aventura submarina...',
    imageUrl: 'https://via.placeholder.com/200x300?text=Finding+Nemo',
    rating: 4.7,
  },
  {
    name: 'Toy Story',
    synopsis: 'A vida secreta dos brinquedos de Andy...',
    imageUrl: 'https://via.placeholder.com/200x300?text=Toy+Story',
    rating: 4.9,
  },
  {
    name: 'Frozen',
    synopsis: 'Elsa e Anna enfrentam desafios no reino de Arendelle...',
    imageUrl: 'https://via.placeholder.com/200x300?text=Frozen',
    rating: 4.6,
  },
];


const movies = [
  { name: 'The Hobbit', rating: 4.8, genre: 'Fantasy', image: 'https://via.placeholder.com/200x300?text=Hobbit' },
  { name: 'Arca de Noé', rating: 4.8, genre: 'Animation', image: 'https://midias.imagemfilmes.com.br/capas/680ac54e-014b-4ac7-ad05-db4cc955ebee_m.jpg?2024-10-08T15:57:57.182879' },
  { name: 'Pets em Ação', rating: 4.8, genre: 'Family', image: 'https://via.placeholder.com/200x300?text=Pets+em+Acao' },
  { name: 'Silvio', rating: 4.8, genre: 'Drama', image: 'https://via.placeholder.com/200x300?text=Silvio' },
  { name: 'O Portal Secreto', rating: 4.8, genre: 'Adventure', image: 'https://via.placeholder.com/200x300?text=Portal+Secreto' },
  { name: 'The Dark Knight', rating: 4.9, genre: 'Action', image: 'https://via.placeholder.com/200x300?text=Dark+Knight' },
  { name: 'Inception', rating: 4.9, genre: 'Sci-Fi', image: 'https://via.placeholder.com/200x300?text=Inception' },
  { name: 'Matrix', rating: 4.7, genre: 'Sci-Fi', image: 'https://via.placeholder.com/200x300?text=Matrix' },
  { name: 'Interstellar', rating: 4.6, genre: 'Drama', image: 'https://via.placeholder.com/200x300?text=Interstellar' },
  { name: 'Avatar', rating: 4.5, genre: 'Fantasy', image: 'https://via.placeholder.com/200x300?text=Avatar' },
  { name: 'The Hobbit', rating: 4.8, genre: 'Fantasy', image: 'https://via.placeholder.com/200x300?text=Hobbit' },
  { name: 'Arca de Noé', rating: 4.8, genre: 'Animation', image: 'https://midias.imagemfilmes.com.br/capas/680ac54e-014b-4ac7-ad05-db4cc955ebee_m.jpg?2024-10-08T15:57:57.182879' },
  { name: 'Pets em Ação', rating: 4.8, genre: 'Family', image: 'https://via.placeholder.com/200x300?text=Pets+em+Acao' },
  { name: 'Silvio', rating: 4.8, genre: 'Drama', image: 'https://via.placeholder.com/200x300?text=Silvio' },
  { name: 'O Portal Secreto', rating: 4.8, genre: 'Adventure', image: 'https://via.placeholder.com/200x300?text=Portal+Secreto' },
  { name: 'Arca de Noé', rating: 4.8, genre: 'Animation', image: 'https://midias.imagemfilmes.com.br/capas/680ac54e-014b-4ac7-ad05-db4cc955ebee_m.jpg?2024-10-08T15:57:57.182879' },
  { name: 'Pets em Ação', rating: 4.8, genre: 'Family', image: 'https://via.placeholder.com/200x300?text=Pets+em+Acao' },
  { name: 'Silvio', rating: 4.8, genre: 'Drama', image: 'https://via.placeholder.com/200x300?text=Silvio' },
  { name: 'O Portal Secreto', rating: 4.8, genre: 'Adventure', image: 'https://via.placeholder.com/200x300?text=Portal+Secreto' },
  { name: 'O Portal Secreto', rating: 4.8, genre: 'Adventure', image: 'https://via.placeholder.com/200x300?text=Portal+Secreto' },

];

const Home = () => {
  const { movies, loading, error } = useMovies();

  // Dividir os filmes em seções, por exemplo, pegar os primeiros 5 para destaque e o top 10
  const featuredMovies = movies.slice(0, 5);
  const top10Movies = movies.slice(0, 10);
  
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.section1}>
          <Input />
        </div>

        {/* Carrossel de Destaque */}
        <div className={styles.section2}>
          <BannerCarousel banners={featuredMovies} />
          {error && <div>erro</div>}
        </div>

        {/* Carrossel Top 10 */}
        <div className={styles.section3}>
          <h1 className={styles.title}>Top 10</h1>
          <Top10Carousel className={styles.carrossel} movies={top10Movies} />
          {error && <div>erro</div>}
        </div>

        {/* Carrossel de Filmes por Gênero */}
        <div className={styles.section3}>
          <h1 className={styles.title}>Gênero</h1>
          <MovieCarousel movies={movies} />
          {error && <div>erro</div>}
        </div>
      </main>
    </div>
  );
};

export default Home;
