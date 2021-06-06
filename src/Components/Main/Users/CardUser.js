import React from 'react'
import styles from './CardUser.module.css'

import { IoIosRemoveCircleOutline } from "react-icons/io";

const CardUser = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardName}>
                <h1>Marianna Lemos</h1>
                <IoIosRemoveCircleOutline className={styles.icon} style={{fontSize: 22}} />
            </div>
            <div>
                <p>Profissão: Desenvolvedor de sistemas</p>
            </div>
            <p>92831984367864</p>
        </div>
    )
}



export default CardUser