import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router'

import { AuthContext } from '../context/AuthContext'

export default function AuthLayout() {
    const { user } = useContext(AuthContext)

    return user ? <Outlet /> : <Navigate to='/login' />
}