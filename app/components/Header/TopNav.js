// components/TopNav/TopNav.js
import React from 'react';
import styles from './TopNav.module.css';
import Link from 'next/link';

const TopNav = ({ openAuthModal }) => {
  return (
    <div className={styles.topNav}>
      <div className={styles.logo}>CineScore</div>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/filmes" className={styles.navLink}>Filmes</Link>
        <Link href="/suporte" className={styles.navLink}>Suporte</Link>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
        <span className={styles.searchIcon}>🔍</span>
      </div>
      <button className={styles.signUpButton} onClick={openAuthModal}>Sign Up</button>
    </div>
  );
};

export default TopNav;
