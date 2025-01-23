import { addDoc, collection } from "firebase/firestore/lite";
import { useCart } from "../context/CartContext";
import { db } from "../config/firebaseConfig";
import { useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, removeFromCart, cleanCart, getTotal } = useCart();
  const { user } = useUser();

  const confirmarCompra = async () => {
    try {
      // creacion la referencia a la coleccion compras
      const comprasRef = collection(db, 'compra'); //configuracion
      // agregamos el documento a firestore
      const docRef = await addDoc(comprasRef, {
        comprador:{
          nombre: user?.name ?? 'Sin identificar',
          telefono: '123456789',
          email: 'mail@mail.com'
        },
        cart, // carrito completo
        total: getTotal() ?? 0, // total del valor de la compra
        fecha: new Date().toISOString(), // fecha de compra
      })
      cleanCart() // limpa el carrito
      console.log('Documento agregado con ID :', docRef);
    } catch (error) {
      console.log('Error :', error);
    }
  }

  return (
    <div className="cart">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>El carrito está vacío.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <span>
                {item.name} - {item.quantity} x {item.price}
              </span>
              <button
                className="cart-button"
                onClick={() => removeFromCart(item.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={confirmarCompra}>
        Comprar
      </button>
      
    </div>
  );
};

export default Cart;
