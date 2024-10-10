/*
export const getGenres = async () => {
  const response = await fetch('https://8080-idx-cinescore-api-1728148796916.cluster-vpxjqdstfzgs6qeiaf7rdlsqrc.cloudworkstations.dev/api/movies/genres', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  });

  if (!response.ok) {
      throw new Error(`Erro ao buscar gêneros: ${response.status}`);
  }

  return await response.json();
};

// Função para buscar filmes por gênero (sem cookies e sem modo "no-cors")

export const getMoviesByGenre = async (genre) => {
  const response = await fetch(`https://8080-idx-cinescore-api-1728148796916.cluster-vpxjqdstfzgs6qeiaf7rdlsqrc.cloudworkstations.dev/api/movies/genre/${genre}?limit=15`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar filmes do gênero ${genre}: ${response.status}`);
  }

  return await response.json();
};
*/
