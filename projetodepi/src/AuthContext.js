import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const savedState = localStorage.getItem('isLoggedIn');
        return savedState ? JSON.parse(savedState) : false;
    });

    useEffect(() => {
     localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
     fetch("http://localhost:8080/")
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
