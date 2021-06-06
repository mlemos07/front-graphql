import React from 'react'
import styles from './style.module.css'

import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contentHeader}>
                <h1>GRAHPQL</h1>
                <ul className={styles.listHeader}>
                    <li><AiOutlineUser style={{fontSize: 20}} /></li>
                    <li><p>Olá, nome</p></li>
                </ul>
            </div>
        </header>
    )
}



export default Header