import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const login = () => {
        setUser({
            name: "Man",
            email: "jeongmal00@naver.com"
        })
    }
    return (
        <div>
            <button onClick={login}>login</button>
            <div>your profile : {user.name} / {user.email}</div>
        </div>
    )
}