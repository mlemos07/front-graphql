import React, { createContext, useState } from 'react'


export const UserContext = createContext()

export const UserStrorage = ({children}) => {

    const [users, setUsers] = useState(null)


    return (
        <UserContext.Provider value={{users, setUsers}}>
            {children}
        </UserContext.Provider>
    )
}