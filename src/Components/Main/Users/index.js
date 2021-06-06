import React from 'react'
import CardUser from './CardUser'

import styles from './style.module.css'

const Users = () => {
    return (
        <section className={styles.containerUser}>
            <h1 className={styles.containerUserTitle}>Usuários cadastrados</h1>
            <CardUser />
        </section>
    )
}



export default Users