import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'
import ErrorBanner from '../../../shared/components/ErrorBanner'

const Register = () => {

    const navigate = useNavigate()
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ submitting, setSubmitting ] = useState(false)

    const { error, handleRegister } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        // Only navigate on success now - see Login.jsx for the same fix.
        const success = await handleRegister({ username, email, password })
        setSubmitting(false)
        if (success) navigate("/")
    }

    return (
        <main className="auth-page">
            <div className="auth-showcase">
                <span className="auth-showcase__mark">HE</span>
                <h2>Walk into your next interview already knowing what they'll ask.</h2>
                <p>HireEdge reads the job description and your background, then builds a tailored set of questions, model answers, and a day-by-day prep plan.</p>
            </div>

            <div className="auth-form-side">
                <div className="form-container">
                    <div className="form-container__header">
                        <h1>Create your account</h1>
                        <p>Free to start. Takes about a minute.</p>
                    </div>

                    <ErrorBanner message={error} />

                    <form onSubmit={handleSubmit}>

                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                onChange={(e) => { setUsername(e.target.value) }}
                                value={username}
                                type="text" id="username" name='username' placeholder='Choose a username' required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                value={email}
                                type="email" id="email" name='email' placeholder='you@example.com' required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) => { setPassword(e.target.value) }}
                                value={password}
                                type="password" id="password" name='password' placeholder='At least 8 characters' minLength={8} required />
                        </div>

                        <button className='button primary-button' disabled={submitting}>
                            {submitting ? 'Creating account...' : 'Create account'}
                        </button>

                    </form>

                    <p className="form-container__switch">Already have an account? <Link to={"/login"} >Log in</Link></p>
                </div>
            </div>
        </main>
    )
}

export default Register
