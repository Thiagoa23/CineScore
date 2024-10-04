import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Cine Score</h1>
      </div>

      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Início</Link>
        <Link href="/categorias" className={styles.link}>Filmes</Link>
        <Link href="/contato" className={styles.link}>Contato</Link>
        <input type="text" placeholder="Buscar filmes..." className={styles.searchInput} />
      </nav>

      <div className={styles.rightSection}>
        <button className={styles.loginButton}>Login</button>
      </div>
    </header>
  );
};

export default Header;
