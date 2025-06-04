import { useState, createContext, useEffect } from 'react'

import axios from '../api/axiosConfig'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // Get logged user data
    async function fetchUserData() {
        try {
            const response = await axios.get('/me')
            const data = await response.data

            setUser(data)
        } catch (error) {
            setUser(null)
        } finally {
            setIsLoading(false)
        }
    }

    // Log out user
    async function logout() {
        setIsLoading(true)

        try {
            await axios.get('/logout')
            setUser(null)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (!user) {
            fetchUserData()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ user, isLoading, fetchUserData, logout }}>{children}</AuthContext.Provider>
    )
}