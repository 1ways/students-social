import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router'

import CircularProgress from '@mui/material/CircularProgress';

import { AuthContext } from '../context/AuthContext'

export default function AuthLayout() {
    const { user, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return (
            <div className="progress__container">
                <CircularProgress size="3rem" />
            </div>
        )
    }

    return user ? <Outlet /> : <Navigate to='/login' />
}