import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import SearchBar from './SearchBar/SearchBar';
import Auth from '../../views/authentication/Auth';

const Navbar = () => {
  const [loggedUser, setLoggedUser] = useState(null); // Usuário logado com role
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  // Verificar se há um usuário logado no localStorage
  useEffect(() => {
    const user = localStorage.getItem('loggedUser');
    if (user) {
      setLoggedUser(JSON.parse(user)); // Parseia para obter username e role
    }
  }, []);

  // Função para logout
  const handleLogout = () => {
    localStorage.removeItem('loggedUser'); // Remove o usuário do localStorage
    setLoggedUser(null); // Atualiza o estado
  };

  // Função para abrir o modal
  const openAuthModal = () => {
    setAuthModalOpen(true);
  };

  // Função para fechar o modal
  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  // Função para lidar com o login
  const handleLogin = (userData) => {
    setLoggedUser(userData); // Define o usuário logado com username e role
    localStorage.setItem('loggedUser', JSON.stringify(userData)); // Armazena no localStorage
    closeAuthModal(); // Fecha o modal após login
  };

  return (
    <>
      <div className={styles.Nav}>
        <div className={styles.logo}>CineScore</div>
        <div className={styles.navLinks}>
          {/* Home e Filmes aparecem para todos */}
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/views/filmes" className={styles.navLink}>Filmes</Link>

          {/* Gerenciar aparece apenas para ADMIN */}
          {loggedUser?.role === 'ADMIN' && (
            <Link href="/views/Admin" className={styles.navLink}>
              Gerenciar
            </Link>
          )}

          {/* Suporte aparece para USER ou Visitante */}
          {(!loggedUser || loggedUser?.role === 'USER') && (
            <Link href="/views/suporte" className={styles.navLink}>
              Suporte
            </Link>
          )}

        </div>
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>
        <div className={styles.userActions}>
          {loggedUser ? (
            <div className={styles.profileContainer}>
              <img
                src="/placeholder-profile.png" // Adicione uma imagem placeholder
                alt="Profile"
                className={styles.profileImage}
              />
              <span className={styles.userName}>{loggedUser.username}</span>
              <button className={styles.logoutButton} onClick={handleLogout}>
                🚪
              </button>
            </div>
          ) : (
            <button
              className={styles.signUpButton}
              onClick={openAuthModal} // Abre o modal
            >
              Sign Up
            </button>
          )}
        </div>
      </div>
      {isAuthModalOpen && (
        <Auth
          onClose={closeAuthModal} // Passa função para fechar o modal
          onLogin={handleLogin} // Passa função para lidar com o login
        />
      )}
    </>
  );
};

export default Navbar;
