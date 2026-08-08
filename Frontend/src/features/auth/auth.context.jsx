import { createContext, useState, useEffect } from "react";
import { getMe } from "./services/auth.api";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Runs once, here in the provider - not inside useAuth(). Previously this
    // effect lived in the useAuth hook itself, so every component that called
    // useAuth() fired its own "who am I" request on mount (duplicate network
    // calls, redundant loading-state flips). Living in the provider means it
    // runs exactly once no matter how many components use the hook.
    useEffect(() => {
        const checkLoggedInUser = async () => {
            try {
                const data = await getMe()
                setUser(data.user)
            } catch {
                // Not being logged in yet is expected on first load - nothing to surface here.
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        checkLoggedInUser()
    }, [])


    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }} >
            {children}
        </AuthContext.Provider>
    )


}