import { collection, getDocs } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { db } from "../config/firebaseConfig";

const useFetch = (nombreColeccion) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Referencia a la coleccion deseada
        const productRef = collection(db, nombreColeccion) // configuracion de firebase y nombre de coleccion
        const snapshot = await getDocs(productRef)

        // mapearmos los documentos obtenidos
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setData(productsList);
        setLoading(false)
      } catch (error) {
        console.log('Error al realizar la consulta :', error);
        setError('Error al consultar los datos');
        setLoading(false);
      }
    } 

    fetchProducts()
  }, []);

  return { data, loading, error };
};

export default useFetch;
