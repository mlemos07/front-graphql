import React from 'react'
import styles from './style.module.css'

const Input = ({label, placeholder, type, name, value, onChange, error, onBlur}) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input 
                className={styles.input}
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default Input