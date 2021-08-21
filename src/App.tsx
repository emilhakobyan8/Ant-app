import React, { useState } from 'react';
import Ants from "./screens/Ants";
import AuthScreen from "./screens/AuthScreen"


const AppNavigation = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const authenticate = () => {
        setIsAuthenticated(true)
    }

    const logOut = () => {
        setIsAuthenticated(false)
    }

    return isAuthenticated ? <Ants logOut={logOut}/> : <AuthScreen authenticate={authenticate}/>

}

export default AppNavigation;
