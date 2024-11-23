// components/TopNav/TopNav.js
import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import SearchBar from './SearchBar/SearchBar';

const Navbar = ({ openAuthModal }) => {
  return (
    <div className={styles.Nav}>
      <div className={styles.logo}>CineScore</div>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/views/filmes" className={styles.navLink}>Filmes</Link>
        <Link href="/suporte" className={styles.navLink}>Suporte</Link>
      </div>
      <div className={styles.searchContainer}>
      <SearchBar />
      </div>
      <button className={styles.signUpButton} onClick={openAuthModal}>Sign Up</button>
    </div>
  );
};

export default Navbar;
