import { createContext, useContext, useState } from "react";

// Creamos un contexto que almacenará información sobre el usuario.
const UserContext = createContext({ user: null, isLoggedIn: false });

// Proveedor del contexto que envuelve la aplicación o parte de ella.
export const UserProvider = ({ children }) => {
  // Estado que almacena los datos del usuario (inicialmente null).
  const [user, setUser] = useState(null); //useState({ name: "Juan", isLoggedIn: true });

  // Función para iniciar sesión, actualizando el estado del usuario.
  const login = (userData) => setUser(userData);

  // Función para cerrar sesión, reseteando el estado del usuario.
  const logout = () => setUser(null);

  // Proveedor del contexto que proporciona las funciones y el estado del usuario.
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children} {/* Renderiza los componentes hijos dentro del proveedor */}
    </UserContext.Provider>
  );
};

// Hook personalizado para consumir el contexto del usuario fácilmente.
export const useUser = () => useContext(UserContext)