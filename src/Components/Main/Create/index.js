import React, { useContext, useEffect } from 'react';
import useForm from '../../../Hooks/useForm.js';
import Input from '../../Form/Input.js';
import styles from './style.module.css'

import { useMutation } from '@apollo/client'
import { UserContext } from '../../Contexts/UserContext.js';

import { CREATE_USER } from '../../../services/Graphql'

const Create = () => {

    const name = useForm()
    const email = useForm('email')
    const profession = useForm()

    const { setUsers } = useContext(UserContext)
    const [createuser, { data }] = useMutation(CREATE_USER)

    async function handleSubmit(e) {
        e.preventDefault()

        if (name.validate() && email.validate() && profession.validate()) {
            createuser({ variables: { name: name.value, email: email.value, profession: profession.value } });

            name.setValue('')
            email.setValue('')
            profession.setValue('')
        }
    }

    useEffect(() => {
        if (data) {
            const { createUser } = data
            setUsers((prevState) => [
                createUser, ...prevState,
            ])
        }
    }, [data])

    return (
        <div className={styles.create}>
            <h1 className={styles.titleUser}>Crie um usuário</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Nome" name="name" {...name} />
                <Input label="Email" name="email" {...email} />
                <Input label="Profissão" name="profession" {...profession} />
                <button className={styles.button}>Criar usuário</button>
            </form>
        </div>
    )
}



export default Create