import axios from "axios"


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
    withCredentials: true
})

// Pulls the backend's error message out of a failed axios request, falling
// back to something readable if the server didn't respond at all (e.g. it's
// down or unreachable). Every function below throws this instead of
// swallowing the error, so callers (useAuth) can actually react to failures.
function toApiError(err) {
    const message = err?.response?.data?.message || "Something went wrong. Please try again."
    return new Error(message)
}

export async function register({ username, email, password }) {

    try {
        const response = await api.post('/api/auth/register', {
            username, email, password
        })

        return response.data

    } catch (err) {
        throw toApiError(err)
    }

}

export async function login({ email, password }) {

    try {

        const response = await api.post("/api/auth/login", {
            email, password
        })

        return response.data

    } catch (err) {
        throw toApiError(err)
    }

}

export async function logout() {
    try {

        const response = await api.get("/api/auth/logout")

        return response.data

    } catch (err) {
        throw toApiError(err)
    }
}

export async function getMe() {

    try {

        const response = await api.get("/api/auth/get-me")

        return response.data

    } catch (err) {
        throw toApiError(err)
    }

}