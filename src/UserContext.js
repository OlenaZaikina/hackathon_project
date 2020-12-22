import React, { useContext, useState } from 'react'

export const UserContext =  React.createContext()
export const UserUpdateContext =  React.createContext()

export function useUser() {
    return useContext(UserContext)
}

export function useUserUpdate() {
    return useContext(UserUpdateContext)
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    function toggleUser(newUser) {
        setUser(newUser)
        console.log("newUser: ", newUser)
    }
    
return (
    <UserContext.Provider value={user}>
        <UserUpdateContext.Provider value={toggleUser}>
            {children}
        </UserUpdateContext.Provider>
    </UserContext.Provider>
)
}