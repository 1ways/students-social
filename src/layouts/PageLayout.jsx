import { Outlet, useLocation } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PageLayout() {
    const location = useLocation()

    let mainClassName = 'main'

    // Check if current page is /login or /signup and if so change main class
    if (location.pathname === '/login' || location.pathname === '/signup') {
        mainClassName = 'main main--auth'
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