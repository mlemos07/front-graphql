import { ApolloProvider } from '@apollo/client'
import React from 'react'
import api from '../../services/api'
import { UserStrorage } from '../Contexts/UserContext'
import Create from './Create/'
import styles from './style.module.css'
import Users from './Users'

const Main = () => {
    return (
        <section className={styles.mainContent}>
            <ApolloProvider client={api}>
                <UserStrorage>
                    <Create />
                    <Users />
                </UserStrorage>
            </ApolloProvider>
        </section>
    )
}



export default Main