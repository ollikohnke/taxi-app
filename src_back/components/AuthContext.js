import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext('');

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    return (
        <AuthContext.Provider value={{token, setToken, isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };