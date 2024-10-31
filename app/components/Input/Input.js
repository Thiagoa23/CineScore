import React from "react";
import styles from "./Input.module.css";

const Input = () => {
    return(
        <div>
            <input className={styles.input} placeholder="Digite o nome do filme" />
        </div>
    );
}

export default Input;