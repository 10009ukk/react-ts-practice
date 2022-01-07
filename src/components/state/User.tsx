import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);

    const login = () => {
        setUser({
            name: "Man",
            email: "jeongmal00@naver.com"
        })
    }
    
    const logout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={login}>login</button>
            <button onClick={logout}>logout</button>
            <div>your profile : {user?.name} / {user?.email}</div>
        </div>
    )
}