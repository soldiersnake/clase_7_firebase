import { Link, NavLink, useLocation } from "react-router-dom";


export const Navegacion = () => {
  //funcion para obtener la locacion actual
  const location = useLocation();

  return (
    <>
      {/* <div className="contenedor-navegacion">
        <nav className="nav-principal contenedor"> */}
          {/* Reemplaza los <a> por <Link> */}
          {/* <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/categorias">Tienda</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/galeria">Galería</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div> */}
      
      <div className="contenedor-navegacion">
        <nav className="nav-principal contenedor">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Inicio
          </NavLink>
          <NavLink to="/nosotros" className={({ isActive }) => (isActive ? "active" : "")}>
            Nosotros
          </NavLink>
          <NavLink to="/categorias" className={({ isActive }) => (isActive ? "active" : "")}>
            Tienda
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
            Blog
          </NavLink>
          <NavLink to="/galeria" className={({ isActive }) => (isActive ? "active" : "")}>
            Galería
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active" : "")}>
            Contacto
          </NavLink>
        </nav>
      </div>

      {/* Contiene Imagen principal */}
      {
        location.pathname === '/' && ( //condicion de locacion para no mostrar o mostrar ciertos elementos
          <div className="hero"></div>
        )
      }
    </>
  );
};
