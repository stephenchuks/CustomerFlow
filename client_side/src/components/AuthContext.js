import React, { createContext, useContext, useState, useEffect } from 'react';

// Create an authentication context
const AuthContext = createContext();

// Create an authentication provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Check if the user is already authenticated (e.g., stored in localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user'); // Replace with your storage method
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Define a function to set the authenticated user
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Store user data
  };

  // Define a function to log out the user
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user data
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook to access the authentication context
export function useAuth() {
  return useContext(AuthContext);
}
