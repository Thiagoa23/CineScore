"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import styles from "./Home.module.css";
import Carousel from '../components/Carrossel/Carousel';
import Banner from "../components/Card/Banner/CardBanner";
import Top10Carousel from '../components/Carrossel/Top 10/CarrosselTop10';
import MovieCard from '../components/Card/Movie Card/MovieCard';
import Input from "../components/Input/Input";

//Slider

const featuredMovies = [
  {
    name: 'Arca de Noé',
    synopsis: 'Nesta aventura animada e inspiradora, Noé recebe uma missão divina: construir uma enorme arca para salvar a criação de um dilúvio iminente. Com a ajuda de sua família, ele começa a preparar a arca, enfrentando desafios e dificuldades, pois precisa acomodar pares de todas as espécies de animais, desde os pequenos insetos até os grandes predadores. Noé se depara com situações caóticas e cômicas ao tentar manter a ordem entre os animais, que possuem comportamentos e personalidades diversas. Durante a longa jornada sobre as águas, enquanto tempestades furiosas sacodem a arca, Noé e sua família aprendem valiosas lições sobre tolerância, paciência e união. No meio da diversidade e dos conflitos, laços de amizade improváveis se formam entre espécies distintas, que jamais conviveriam juntas em situações normais. A animação combina momentos emocionantes e engraçados, trazendo uma mensagem de fé, perseverança e respeito pela natureza. Noé e seus companheiros aguardam ansiosamente o momento em que as águas baixarão e a arca finalmente tocará a terra firme, renovando a esperança de um novo começo para todos os seres vivos.',
    imageUrl: 'https://midias.imagemfilmes.com.br/capas/680ac54e-014b-4ac7-ad05-db4cc955ebee_m.jpg?2024-10-08T15:57:57.182879',
    rating: 4.9,
  },
  // outros filmes ...
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
];

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar /> 
    
      <main className={styles.main}>
        <div className={styles.section1}>
          <Input />
        </div>

        <div className={styles.section2}>
          <Banner movie={featuredMovies[0]} />
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
