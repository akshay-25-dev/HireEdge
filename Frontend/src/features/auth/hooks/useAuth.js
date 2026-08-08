import { useContext, useState } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout } from "../services/auth.api";



export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context
    const [ error, setError ] = useState(null)

    // Returns true/false so callers (Login/Register pages) know whether to
    // navigate on - previously they always navigated regardless of outcome,
    // because failures were silently swallowed before reaching here.
    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        setError(null)
        try {
            const data = await login({ email, password })
            setUser(data.user)
            return true
        } catch (err) {
            setError(err.message)
            return false
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        setError(null)
        try {
            const data = await register({ username, email, password })
            setUser(data.user)
            return true
        } catch (err) {
            setError(err.message)
            return false
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        setError(null)
        try {
            await logout()
            setUser(null)
            return true
        } catch (err) {
            setError(err.message)
            return false
        } finally {
            setLoading(false)
        }
    }

    return { user, loading, error, handleRegister, handleLogin, handleLogout }
}