import { useContext } from 'react'
import { Outlet, useLocation } from 'react-router'

import { AuthContext } from '../context/AuthContext'

import CircularProgress from '@mui/material/CircularProgress'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PageLayout() {
    const location = useLocation()
    const { isLoading } = useContext(AuthContext)

    let mainClassName = 'main'

    // Check if current page is /login or /signup and if so change main class
    if (location.pathname === '/login' || location.pathname === '/signup') {
        mainClassName = 'main main--auth'
    }

    if (isLoading) {
        return (
            <div className="progress__container">
                <CircularProgress size="3rem" />
            </div>
        )
    }

    return (
        <>
            <Header />
            <main className={mainClassName}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}