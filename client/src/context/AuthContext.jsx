import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
import Cookies from 'js-cookie'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;

}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)


    const signUp = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res)
            Cookies.set("token", res.data.token)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
            Cookies.set("token", res.data.token)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    const logout = () => {
        Cookies.remove("token")
        setIsAuthenticated(false)
        setUser(null)
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)

            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {

        const checkLogin = async () => {
            const cookies = Cookies.get()

            if (!cookies.token) {
                setIsAuthenticated(false)
                setLoading(false)
                return setUser(null)
            }

            try {
                const res = await verifyTokenRequest(cookies.token)
                console.log("se verifica el token")
                console.log(res)

                if (!res.data) {
                    setIsAuthenticated(false)
                    setLoading(false)
                    Cookies.remove("token")
                    return;
                }
                setIsAuthenticated(true)
                setUser(res.data)
                setLoading(false)

            } catch (error) {
                console.log("NO VERIFICA TOKEN")
                console.error(error)
                setIsAuthenticated(false);
                setUser(null)
                setLoading(false)
                Cookies.remove("token")
            }
        }

        checkLogin();

    }, [])

    return (
        <AuthContext.Provider value={{ signUp, signIn, logout, loading, user, isAuthenticated, errors }}>
            {children}
        </AuthContext.Provider>
    )
}
