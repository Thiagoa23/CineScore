"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Home.module.css";
import Carousel from '../components/Carrossel/Carousel';
import Top10Carousel from '../components/Carrossel/Top 10/CarrosselTop10';
import MovieCard from '../components/Card/Movie Card/MovieCard';

//Slider


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
];

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar /> 
    
      <main className={styles.main}>
        <div className={styles.section1}>
          {/* Conteúdo da seção 1 */}
        </div>

        <div className={styles.section2}>
          <Carousel />
        </div>

        <div className={styles.section3}> 
          <h1 className={styles.title}>Top 10</h1>
          <div>
            <Top10Carousel className={styles.carrossel} movies={movies} />
          </div>
        </div>


      </main>
    </div>
  );
};

export default Home;
