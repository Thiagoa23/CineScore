"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "./Home.module.css";
import MovieCard from "../components/MovieCard";

// Função para buscar gêneros da API(mover para o arquivo certo quando fuuncionar)
const fetchGenres = async () => {
  try {
    console.log("Iniciando requisição de gêneros...");
    const response = await fetch(
      `https://8080-idx-cinescore-api-1728148796916.cluster-vpxjqdstfzgs6qeiaf7rdlsqrc.cloudworkstations.dev/genres`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    console.log("Resposta recebida:", response);

    if (!response.ok) {
      throw new Error("Erro ao buscar gêneros");
    }

    const data = await response.json();
    console.log("Dados recebidos:", data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar gêneros:", error);
    return [];
  }
};

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");

  // Gêneros e filmes manuais caso a API falhe
  const defaultGenres = ["Ação", "Comédia", "Drama"];
  const movies = {
    Ação: [
      { title: "Ação 1", description: "Filme de ação emocionante" },
      { title: "Ação 2", description: "Aventura cheia de adrenalina" },
      { title: "Ação 3", description: "Luta épica entre heróis" },
      { title: "Ação 4", description: "Corrida contra o tempo" },
      { title: "Ação 5", description: "Perseguições e explosões" },
    ],
    Comédia: [
      { title: "Comédia 1", description: "Filme de comédia hilária" },
      { title: "Comédia 2", description: "Risos garantidos" },
      { title: "Comédia 3", description: "Situações engraçadas" },
      { title: "Comédia 4", description: "Roteiro cheio de piadas" },
      { title: "Comédia 5", description: "Humor para a família" },
    ],
    Drama: [
      { title: "Drama 1", description: "História emocionante" },
      { title: "Drama 2", description: "Luta pela sobrevivência" },
      { title: "Drama 3", description: "Conflito familiar" },
      { title: "Drama 4", description: "Drama e romance" },
      { title: "Drama 5", description: "Superação de desafios" },
    ],
  };

  useEffect(() => {
    const fetchAndSetGenres = async () => {
      const data = await fetchGenres();
      if (data.length === 0) {
        // Se a API falhar, usar gêneros manuais
        setGenres(defaultGenres);
        setError("Nenhum gênero encontrado via API. Mostrando gêneros padrão.");
      } else {
        setGenres(data);
      }
    };

    fetchAndSetGenres();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
        
          {/* Mostrar gêneros e seus filmes */}
          {Array.isArray(genres) && genres.length > 0 ? (
            genres.map((genre, index) => (
              <div key={index} className={styles.genreSection}>
                <h3 className={styles.genreTitle}>{genre}</h3>
                <div className={styles.moviesGrid}>
                  {movies[genre]?.map((movie, idx) => (
                    <MovieCard key={idx} movie={movie} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>{error || "Nenhum gênero encontrado."}</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Home;
