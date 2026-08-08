import React from 'react'
import './ErrorBanner.scss'

/**
 * Inline error message. Previously failed logins/registers/report
 * generations had nowhere to surface an error at all - they failed silently.
 */
const ErrorBanner = ({ message }) => {
    if (!message) return null

    return (
        <div className="error-banner" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{message}</span>
        </div>
    )
}

export default ErrorBanner
