import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
    const userContext = useContext(UserContext);

    const login  = () => {
        userContext.setUser({
            name: "man",
            email: "jeongmal00@naver.com"
        })
    }
    const logout = () => {
        userContext.setUser(null);   
    }

    return (
        <div>
            <button onClick={login}>login</button>
            <button onClick={logout}>logout</button>
            <div>User name is {userContext.user?.name}</div>
            <div>User email is {userContext.user?.email}</div>
        </div>
    )
}