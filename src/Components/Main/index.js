import React from 'react'
import Create from './Create/'
import styles from './style.module.css'
import Users from './Users'

const Main = () => {
    return (
        <section className={styles.mainContent}>
            <Create />
            <Users />
        </section>
    )
}



export default Main