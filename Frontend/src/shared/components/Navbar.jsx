import React from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../../features/auth/hooks/useAuth'
import './Navbar.scss'

/**
 * Shared header for authenticated pages (Home, Interview). The app
 * previously had no logout affordance anywhere in the UI - once logged in
 * there was no way back out short of clearing cookies manually.
 */
const Navbar = () => {
    const { user, handleLogout } = useAuth()
    const navigate = useNavigate()

    const onLogout = async () => {
        const success = await handleLogout()
        if (success) navigate('/login')
    }

    return (
        <header className="app-navbar">
            <Link to="/" className="app-navbar__brand">
                <span className="app-navbar__mark">HE</span>
                <span className="app-navbar__name">HireEdge</span>
            </Link>

            <div className="app-navbar__right">
                {user && <span className="app-navbar__user">{user.username}</span>}
                <button className="app-navbar__logout" onClick={onLogout}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                    Log out
                </button>
            </div>
        </header>
    )
}

export default Navbar
