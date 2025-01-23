import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useUser } from "./context/UserContext";
import { Blog } from "./page/Blog";
import Categorias from "./page/Categorias";
import { Contacto } from "./page/Contacto";
import { Detalle } from "./page/Detalle";
import Footer from "./page/Footer";
import { Galeria } from "./page/Galeria";
import { Header } from "./page/Header";
import MainPage from "./page/MainPage";
import { Navegacion } from "./page/Navegacion";
import SobreNosotros from "./page/SobreNosotros";

function App() {
  const { user } = useUser();
  console.log("user :", user);

  return (
    <>
      <BrowserRouter>
        {/* Header y Navegación estarán siempre visibles */}
        <Header />
        <Navegacion />

        {/* Contenido dinámico dependiendo de la ruta */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/nosotros" element={<SobreNosotros />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          {/* Ruta para páginas no encontradas */}
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>

        {/* Footer siempre visible */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
