import { createContext, useEffect, useState } from "react";

//checking whether user is registered or not
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
//login rpossible if the credentials matched below
    const login = () => {
        // To do
        setCurrentUser({
            id:1,
            name: "Himasha Nethmini",
            profilePic:
                "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
        });

    };

    useEffect(() =>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    
    )
};