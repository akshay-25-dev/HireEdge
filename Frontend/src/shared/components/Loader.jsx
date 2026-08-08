import React from 'react'
import './Loader.scss'

/**
 * Consistent full-page (or inline) loading state. Replaces the plain
 * "Loading......." text that was previously duplicated across
 * Protected/Login/Register/Home/Interview with slightly different wording
 * each time.
 */
const Loader = ({ label = 'Loading...', fullPage = true }) => {
    const content = (
        <div className="loader">
            <span className="loader__ring" aria-hidden="true" />
            <p className="loader__label">{label}</p>
        </div>
    )

    if (!fullPage) return content

    return (
        <main className="loader-page">
            {content}
        </main>
    )
}

export default Loader
