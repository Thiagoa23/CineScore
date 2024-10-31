import React from 'react';
import styles from './Navbar.module.css';
import LogoutButton from "../LogoutButton/LogoutButton";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navItems}>
        <a href="/" className={styles.navItem}>Home</a>
        <a href="/about" className={styles.navItem}>About</a>
        <a href="/services" className={styles.navItem}>Services</a>
        <a href="/contact" className={styles.navItem}>Contact</a>
      </div>
      <div className={styles.logoutContainer}>
        <LogoutButton className={styles.logoutButton}/>
      </div>
    </nav>
  );
};

export default Navbar;
