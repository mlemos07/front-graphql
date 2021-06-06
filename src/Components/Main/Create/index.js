import React from 'react';
import Input from '../../Form/Input.js';
import styles from './style.module.css'

const Create = () => {
    return (
        <div className={styles.create}>
            <h1 className={styles.titleUser}>Crie um usuário</h1>
            <form>
                <Input label="Nome" />
                <Input label="Idade" />
                <Input label="Profissão" />
                <button className={styles.button}>Criar usuário</button>
            </form>
        </div>
    )
}



export default Create