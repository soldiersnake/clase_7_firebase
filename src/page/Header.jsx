import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore/lite";
import { db } from "../config/firebaseConfig";
import { useUser } from "../context/UserContext";
import { products } from "../service/Constantes";
import { useState } from "react";

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "blue",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export const Header = () => {
  const { user, login, logout } = useUser();

  const handleLoginLogout = () => {
    if (user?.isLoggedIn) {
      logout();
      console.log("Usuario deslogueado");
    } else {
      login({ name: "Juan Carlos", isLoggedIn: true });
      console.log("Usuario logueado");
    }
  };

  //funcion para cargar productos a firebase
  const cargarProducts = async () => {
    try {
      const productRef = collection(db, "ProductosMichis"); // referencia a la coleccion
      for (const product of products) {
        await addDoc(productRef, product); // agrega cada producto como un documento
      }
      console.log("Productos cargados existosamente en Firestore");
    } catch (error) {
      console.log("Error al cargar los productos :", error);
    }
  };

  // Función para actualizar productos en Firestore
  const uploadProductos = async () => {
    try {
      const productRef = collection(db, "ProductosMichis"); // Referencia a la colección
      const snapshot = await getDocs(productRef);

      // Actualiza cada documento con el campo "stock"
      snapshot.forEach(async (docSnap) => {
        const docRef = doc(db, "ProductosMichis", docSnap.id); // Obtiene referencia al documento
        await updateDoc(docRef, { stock: true }); // Actualiza el campo "stock"
      });

      console.log("Productos actualizados exitosamente en Firestore");
    } catch (error) {
      console.log("Error al actualizar los productos:", error);
    }
  };

  //ACTUALIZAR CON BATCH
  const uploadBatchProductos = async () => {
    try {
      const batch = writeBatch(db); // Crea una instancia de batch
      const productRef = collection(db, "ProductosMichis");
      const snapshot = await getDocs(productRef);

      snapshot.forEach((docSnap) => {
        const docRef = docSnap.ref; // Obtiene referencia al documento
        batch.update(docRef, { amigables: true }); // Agrega la operación de actualización al batch
      });

      await batch.commit(); // Ejecuta todas las operaciones
      console.log("Productos actualizados exitosamente con batch");
    } catch (error) {
      console.log("Error al actualizar los productos con batch:", error);
    }
  };

  // ELIMINAR POR ID
  const [productId, setProductId] = useState(""); // Estado para el ID del producto
  const deleteProductById = async (id) => {
    try {
      const docRef = doc(db, "ProductosMichis", id); // Referencia al documento por ID
      await deleteDoc(docRef); // Elimina el documento
      console.log(`Producto con ID ${id} eliminado exitosamente.`);
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  // ELIMINAR TODOS CON BATCH
  const deleteAllProducts = async () => {
    try {
      const batch = writeBatch(db); // Crea un batch para operaciones atómicas
      const productsRef = collection(db, "ProductosMichis"); // Referencia a la colección
      const snapshot = await getDocs(productsRef); // Obtener todos los documentos

      snapshot.forEach((docSnap) => {
        batch.delete(docSnap.ref); // Agregar la eliminación de cada documento al batch
      });

      await batch.commit(); // Ejecuta todas las eliminaciones
      console.log("Todos los productos han sido eliminados con batch.");
    } catch (error) {
      console.error("Error al eliminar los productos con batch:", error);
    }
  };

  // Obtener productos cuyo precio sea mayor a $500.
  const getExpensiveProducts = async () => {
    try {
      const productsRef = collection(db, "ProductosMichis"); // Referencia a la colección
      const q = query(productsRef, where("price", ">", 500)); // Consulta con condición
      const snapshot = await getDocs(q); // Obtener los documentos que cumplen con la condición

      // Mapeamos los resultados
      const expensiveProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("Productos caros:", expensiveProducts);
    } catch (error) {
      console.error("Error al obtener productos caros:", error);
    }
  };

  //  Obtener productos con stock verdadero y amigables.
  const getFilteredProducts = async () => {
    try {
      const productsRef = collection(db, "ProductosMichis");
      const q = query(
        productsRef,
        where("stock", "==", true), // Primera condición
        where("amigables", "==", true) // Segunda condición
      );
      const snapshot = await getDocs(q);

      const filteredProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("Productos filtrados:", filteredProducts);
    } catch (error) {
      console.error("Error al obtener productos filtrados:", error);
    }
  };

  // obtener producto por ID
  const getProductById = async (id) => {
    try {
      const docRef = doc(db, "ProductosMichis", id); // Referencia al documento por ID
      const docSnap = await getDoc(docRef); // Obtén el documento

      if (docSnap.exists()) {
        console.log("Producto encontrado:", docSnap.data());
      } else {
        console.log("No se encontró el producto con ese ID");
      }
    } catch (error) {
      console.error("Error al obtener producto por ID:", error);
    }
  };

  return (
    <>
      <header style={{ position: "relative" }}>
        {/* Botón posicionado en la esquina superior izquierda */}
        <button
          onClick={handleLoginLogout}
          style={{
            position: "absolute",
            top: "-20px",
            right: "10px",
            padding: "10px 20px",
            background: user?.isLoggedIn ? "red" : "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {user?.isLoggedIn ? "Logout" : "Login"}
        </button>

        {/* Título centrado */}
        <h1 className="nombre-sitio">
          Mi Primer <span>Ecommers</span>
        </h1>

        {/* Mensaje de bienvenida */}
        {user?.isLoggedIn && (
          <>
            <p
              style={{
                textAlign: "center",
                color: "red",
                marginTop: "10px",
              }}
            >
              {`Bienvenido, ${user.name}`}
            </p>

            <div>
              {/* CARGAR PRODUCTOS */}
              <button
                onClick={cargarProducts}
                style={{
                  ...buttonStyle,
                  marginLeft: "5px",
                  backgroundColor: "blue",
                  color: "white",
                }}
              >
                Cargar productos a Firestore
              </button>

              {/* ACTUALIZAR */}
              <button
                onClick={uploadProductos}
                style={{
                  ...buttonStyle,
                  marginLeft: "5px",
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                Actualizar productos de Firestore
              </button>

              {/* ACTUALIZAR BATCH */}
              <button
                onClick={uploadBatchProductos}
                style={{
                  ...buttonStyle,
                  marginLeft: "5px",
                  backgroundColor: "yellow",
                  color: "black",
                }}
              >
                Actualizar productos con Batch Firestore
              </button>

              {/* Input y botón para eliminar producto */}
              <div style={{ marginTop: "20px" }}>
                <input
                  type="text"
                  placeholder="Ingresa el ID del producto"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  style={{
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginRight: "10px",
                  }}
                />
                <button
                  onClick={() => deleteProductById(productId)}
                  style={{
                    ...buttonStyle,
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  Eliminar producto por ID
                </button>
              </div>

              {/* DELETE CON BATCH */}
              <button
                onClick={deleteAllProducts}
                style={{
                  ...buttonStyle,
                  margin: "5px",
                  backgroundColor: "red",
                  color: "black",
                }}
              >
                Eliminar todos los productos con Batch
              </button>


              {/* SENTENCIAS DE QUERY Y WHERE */}
              <button onClick={getExpensiveProducts} style={buttonStyle}>
                Productos Mayor $500
              </button>
              <button
                onClick={getFilteredProducts}
                style={{ ...buttonStyle, marginLeft: "5px" }}
              >
                Productos con stock y amigables
              </button>
              <input
                type="text"
                placeholder="Ingresa ID del producto"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
              />
              <button
                onClick={() => getProductById(productId)}
                style={buttonStyle}
              >
                Buscar producto por ID
              </button>
            </div>
          </>
        )}
      </header>
    </>
  );
};
