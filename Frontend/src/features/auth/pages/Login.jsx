import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'
import ErrorBanner from '../../../shared/components/ErrorBanner'

const Login = () => {

    const { error, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ submitting, setSubmitting ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        // Only navigate on success now - previously this navigated to "/"
        // unconditionally, even on a wrong password, with no error shown.
        const success = await handleLogin({ email, password })
        setSubmitting(false)
        if (success) navigate('/')
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
                        <h1>Welcome back</h1>
                        <p>Log in to pick up where you left off.</p>
                    </div>

                    <ErrorBanner message={error} />

                    <form onSubmit={handleSubmit}>
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
                                type="password" id="password" name='password' placeholder='Enter password' required />
                        </div>
                        <button className='button primary-button' disabled={submitting}>
                            {submitting ? 'Logging in...' : 'Log in'}
                        </button>
                    </form>
                    <p className="form-container__switch">Don't have an account? <Link to={"/register"} >Register</Link></p>
                </div>
            </div>
        </main>
    )
}

export default Login
