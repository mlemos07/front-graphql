import React from 'react'
import styles from './style.module.css'

import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";

const Nav = () => {
    return (
        <nav className={styles.navBar}>
            <ul>
                <li>
                    <AiOutlineUser style={{fontSize: 20}}/>
                </li>
                <li>
                    <AiOutlineUserAdd style={{fontSize: 20}}/>
                </li>
            </ul>
        </nav>
    )
}


export default Nav