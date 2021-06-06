import React, { useContext, useEffect, useState } from 'react'
import CardUser from './CardUser'

import styles from './style.module.css'

import { useQuery } from '@apollo/client'
import { UserContext } from '../../Contexts/UserContext'
import { GET_USERS } from '../../../services/Graphql'

const Users = () => {

    const {users, setUsers } = useContext(UserContext)

    const { data } = useQuery(GET_USERS)

    useEffect(() => {
        if(data) {
            const { getUsers } = data
            setUsers(getUsers)
        }
    }, [data])

    return (
        <section className={styles.containerUser}>
            <h1 className={styles.containerUserTitle}>Usuários cadastrados</h1>
            {users && 
                users.map(user => (
                    <CardUser key={user._id} name={user.name} profession={user.profession} _id={user._id} />
                ))
            }
            
        </section>
    )
}



export default Users