import React from "react";
import UserContext from "./UserContext";

let UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider >
    )
}

export default UserContextProvider