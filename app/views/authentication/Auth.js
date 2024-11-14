import React, { useState } from 'react';
import styles from './Auth.module.css';

const Auth = ({ onClose }) => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.authBox} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.title}>{isLogin ? 'Login' : 'Register'}</h2>
                <form>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Username" className={styles.inputField} />
                        <span className={styles.icon}>👤</span>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="password" placeholder="Password" className={styles.inputField} />
                        <span className={styles.icon}>🔒</span>
                    </div>
                    <button type="submit" className={styles.authButton}>
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
                <p className={styles.text}>
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}
                    <span onClick={() => setIsLogin(!isLogin)} className={styles.toggle}>
                        {isLogin ? ' Register' : ' Login'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Auth;
