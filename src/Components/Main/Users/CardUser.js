import React from 'react'
import styles from './CardUser.module.css'

import { IoIosRemoveCircleOutline } from "react-icons/io";

const CardUser = ({name, profession, _id}) => {

    return (
        <div className={styles.card}>
            <div className={styles.cardName}>
                <h1>{name}</h1>
                <IoIosRemoveCircleOutline className={styles.icon} style={{fontSize: 22}} />
            </div>
            <div>
                <p>Profissão: {profession}</p>
            </div>
            <p>{_id}</p>
        </div>
    )
}



export default CardUser