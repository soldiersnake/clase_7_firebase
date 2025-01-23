import { createContext, useContext, useState } from "react";

// Creamos el contexto que almacenará el estado del carrito de compras.
const CartContext = createContext();

// Proveedor del contexto que envuelve la aplicación o parte de ella.
export const CartProvider = ({ children }) => {
  // Estado que almacena los productos en el carrito.
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito.
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Verifica si el producto ya existe en el carrito.
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Si el producto ya existe, actualiza la cantidad.
        return prevCart.map(
          (item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 } // Incrementa la cantidad.
              : item // Mantén los demás productos sin cambios.
        );
      }
      // Si el producto no existe, agrégalo con cantidad inicial de 1.
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Función para eliminar un producto del carrito.
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id)); // Filtra los productos para eliminar el seleccionado.
  };

  // Funcion para limpiar el Carrito
  const cleanCart = () => {
    setCart([])
  }

  // Función para calcular el total del carrito.
  const getTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price);
      return total + price * item.quantity;
    }, 0); // Comenzamos con un total de 0.
  };

  // Proveedor del contexto que proporciona las funciones y el estado del carrito.
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cleanCart, getTotal }}>
      {children} {/* Renderiza los componentes hijos dentro del proveedor */}
    </CartContext.Provider>
  );
};

// Hook personalizado para consumir el contexto del carrito fácilmente.
export const useCart = () => useContext(CartContext);
