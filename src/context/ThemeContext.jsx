// ThemeContext.jsx
import { createContext, useContext, useState } from "react";

// 1. Crear el contexto
const ThemeContext = createContext();

// 2. Crear el proveedor del contexto
export const ThemeProvider = ({ children }) => {
  // Estado para almacenar el tema actual
  const [theme, setTheme] = useState("light");

  // Función para alternar entre los temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Proveer el estado y la función al resto de la aplicación
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Hook personalizado para usar el contexto
export const useTheme = () => useContext(ThemeContext);

// App.jsx
import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

// const App = () => {
//   return (
//     <ThemeProvider>
//       <Header />
//       <Content />
//     </ThemeProvider>
//   );
// };

// const Header = () => {
//   //Componente Header
//   const { theme, toggleTheme } = useTheme();
//   return (
//     <header
//       style={{
//         backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
//         color: theme === "light" ? "#000" : "#fff",
//         padding: "10px",
//       }}
//     >
//       <h1>App con Contexto</h1>
//       <button onClick={toggleTheme}>
//         Cambiar a {theme === "light" ? "modo oscuro" : "modo claro"}
//       </button>
//     </header>
//   );
// };

// const Content = () => {
//   //Componente Content
//   const { theme } = useTheme();
//   return (
//     <main
//       style={{
//         backgroundColor: theme === "light" ? "#fff" : "#444",
//         color: theme === "light" ? "#000" : "#fff",
//         padding: "20px",
//       }}
//     >
//       <p>Este es el contenido de la aplicación.</p>
//     </main>
//   );
// };


// import React, { useState } from 'react';

// const ConditionalRendering = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       {/* Renderizado condicional */}
//       <h1>{isLoggedIn ? 'Bienvenido de nuevo!' : 'Por favor, inicia sesión'}</h1>
      
//       {/* Botón para cambiar el estado */}
//       <button onClick={toggleLogin} style={{ marginTop: '10px', padding: '10px 20px' }}>
//         {isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}
//       </button>
//     </div>
//   );
// };

// export default ConditionalRendering;