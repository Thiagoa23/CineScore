import React from 'react';
import Header from '../../components/Header';
import styles from '../../styles/Home.module.css'; // Importa os estilos para a Home

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <h2 className={styles.heading}>Bem-vindo ao Cine Store</h2>
          <p className={styles.paragraph}>Explore os melhores filmes e veja avaliações feitas por outros usuários!</p>
        </main>
      </div>
    </div>
  );
};

export default Home;
