import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));
  const [rol, setRol] = useState(localStorage.getItem('rol') || null);

  const login = (token, rolUsuario) => {
    localStorage.setItem('token', token);
    localStorage.setItem('rol', rolUsuario);
    setIsLogged(true);
    setRol(rolUsuario);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    setIsLogged(false);
    setRol(null);
  };

  return (
    <AuthContext.Provider value={{ isLogged, rol, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};