import { useEffect, useState } from 'react';
import Cart from '../component/Cart';
import { Loading } from '../component/Loading';
import { useCart } from '../context/CartContext';
import { products } from '../service/Constantes';
import useFetch from '../Hooks/useFetch';
import { data } from 'react-router-dom';

const MainPage = () => {
  // Loading de spinner
  // const [loading, setLoading] = useState(true);
  const {data, loading, error} = useFetch('ProductosMichis')

  useEffect(() => {
    console.log('Data obtenida :', data);
    
  }, [])

  const { cart, addToCart } = useCart();

  return (
    <>
      <main className="contenido-principal contenedor">
        <h2 className="text-center">Nuestros Michis</h2>
        
        {
          loading ? (
            <Loading/>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <div className="listado-productos">
              {data.map((product) => (
                <div className="producto" key={product.id}>
                  <img src={product.image} alt={`Imagen de ${product.name}`} />
                  <div className="texto-producto">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="precio">{product.price}</p>
                    <a
                      className="btn"
                      onClick={() => addToCart(product)}
                    >
                      Agregar al carrito
                    </a>
                  </div>
                </div>
              ))}
            </div>

          )
        }

        {/* CONDICIONAL PARA MOSTRAR EL CART */}
        {
          cart.length > 0 && (
          <div className='align-center'>
            <Cart />
          </div>
          )
        }
      </main>
    </>
  );
};

export default MainPage;
